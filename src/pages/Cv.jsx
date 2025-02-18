import CvInfo from "../components/CVinfo";

export default function Cv() {
    return (
        <>
            <main className='cv'>
                <section id="cv-image">
                    <h1>CV</h1>
                </section>

                <section className="main">
                    <CvInfo />
                </section>
                
            </main>
        </>
    );
}