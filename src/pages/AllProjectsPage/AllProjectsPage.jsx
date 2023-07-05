import { useEffect, useState } from 'react';
import * as projectsAPI from '../../utilities/project-api';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './AllProjectsPage.css'


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
                <div className='dash-top'>
                    <h2 className='dash-h2'>all projects</h2>

                    <div className='quote-container box-shadow'>
                        <p className='quote-text'>{quote.text}</p>
                        <span className='quote-author'>- {quote.author} -</span>
                    </div>
                </div>

                <div className='box-shadow' id='project-card-container'>
                    { projects.length ?
                    <div id='project-card-grid'>
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