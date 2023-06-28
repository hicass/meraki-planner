export default function AllProjectsPage({ quote }) {
    return (
        <section id='all-projects-container'>
            <div>
                <h2>all projects</h2>

                <div>
                    <p>{quote.text}</p>
                    <span>{quote.author}</span>
                </div>
            </div>
        </section>
    )
}