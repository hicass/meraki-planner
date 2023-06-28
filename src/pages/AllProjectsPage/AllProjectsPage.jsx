export default function AllProjectsPage({ quote, setDashPageContent }) {
    return (
        <section id='all-projects-container'>
            <div>
                <h2>all projects</h2>

                <div>
                    <p>{quote.text}</p>
                    <span>{quote.author}</span>
                </div>
                <button onClick={() => setDashPageContent('projectDetail')}>ProjectDetail</button>
            </div>
        </section>
    )
}