import { useState, useEffect } from 'react';

export default function GetPortfolio() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/Simon-Eke/repos?per_page=100")
            .then((response) => response.json())
            .then((data) => {
                const relevantProjects = data
                    .filter((project) => project.size > 0)
                    .slice(0, 9);

                setProjects(relevantProjects);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="projects-container">
            {loading ? (
                <h2>Loading projects...</h2>
            ) : (
                projects.map((project) => (
                    <article className="card" key={project.id}>
                        <h2>{project.name}</h2>

                        <figure className="card-section">
                            <img src={project.owner.avatar_url} alt={project.full_name} />
                            <figcaption>{project.owner.login}:s Avatar on Github</figcaption>
                        </figure>

                        <section id="card-bottom">
                            <a href={project.html_url} target="_blank" title={`Click to view ${project.name} on GitHub`}><i className="fa fa-brands fa-github" style={{ fontSize: '40px' }}></i></a>
                            
                            <label htmlFor={`modal-toggle-${project.name}`} className="more-info-btn">More Info</label>

                            <input type="checkbox" id={`modal-toggle-${project.name}`} className="modal-toggle" hidden />

                            <div className="modal">
                                <div className="modal-content">
                                    <h3>{project.name}</h3>
                                    <p>{project.description || "No description available"}</p>
                                    <p>Primary language: {project.language}</p>
                                    <a href={project.html_url} target="_blank" title={`Click to view my ${project.name} project on GitHub`}><i className="fa fa-brands fa-github" style={{ fontSize: '40px' }}></i></a>
                                    <label htmlFor={`modal-toggle-${project.name}`} className="close-btn">Close</label>
                                </div>
                            </div>
                        </section>
                    </article>
                ))
            )}
            
        </section>
    );
}

