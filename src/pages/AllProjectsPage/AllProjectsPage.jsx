import { useEffect, useState } from 'react';
import * as projectsAPI from '../../utilities/project-api';
import ProjectCard from '../../components/ProjectCard/ProjectCard';


export default function AllProjectsPage({ quote, setDashPageContent }) {
    const [projects, setProjects] = useState([])

    useEffect(function() {
        async function getProjects() {
            const userProjects = await projectsAPI.getAll();
            setProjects(userProjects);
        }
        getProjects();
    }, []);

    return (
        <section id='all-projects-container'>
            <div>
                <h2>all projects</h2>

                <div>
                    <p>{quote.text}</p>
                    <span>{quote.author}</span>
                </div>

                <div>
                    { projects.length ?
                    <div>
                        {projects.map((project, idx) => (
                            <ProjectCard project={project} key={idx} />
                        ))}
                    </div>
                    :
                     <p>Looks like you haven't started a project yet...</p>
                    }
                </div>
            </div>
        </section>
    )
}