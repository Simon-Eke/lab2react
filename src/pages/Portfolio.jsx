import Projects from '../components/GetPortfolio';

export default function Portfolio() {
    return (
        <>
            <main>
                <section id="portfolio-image">
                    <h1>Portfolio</h1>
                </section>

                <section>
                    <h2>Mina projekt!</h2>
                    <Projects />
                </section>
            </main>
        </>
    );
}