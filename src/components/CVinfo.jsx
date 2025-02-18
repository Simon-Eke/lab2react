import { useState, useEffect} from 'react';

export default function CV() {
    const [cvData, setCvData] = useState(null);

    useEffect(() => {
        fetch('/data/cvData.json')
        .then((response) => response.json())
        .then((data) => setCvData(data))
        .catch((error) => console.error('Error fetching CV data:', error));
    }, []);
    
    if (!cvData) {
        return <div>Loading CV...</div>;
    }

    return (
        <>
            <section>
                <h2>Erfarenheter</h2>
                <ul>
                    {cvData.experience.map((job, index) => (
                        <li key={index}>
                           <h3>{job.jobTitle}</h3> 
                           <h4>{job.employer} ({job.dates})</h4>
                           <p>{job.description}</p>    
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Utbildningar</h2>
                <ul>
                    {cvData.education.map((edu, index) => (
                        <li key={index}>
                            <h3>{edu.title}</h3>
                            <h4>{edu.school} ({edu.dates})</h4>
                            <p>{edu.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Övriga Meriter</h2>
                <ul>
                    {cvData.skills.map((skill, index) => (
                        <li key={index}>
                            <h3>{skill.skill}</h3>
                            <h4>{skill.category} ({skill.year})</h4>
                            <p>{skill.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Språk</h2>
                <ul>
                    {cvData.languages.map((language, index) => (
                        <li key={index}>
                            <h3>{language.title}</h3>
                            <p>{language.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};
