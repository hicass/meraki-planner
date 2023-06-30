import { Link } from 'react-router-dom';
import './ProjectCard.css'


export default function ProjectCard({ project }) {
    return (
        <Link to={`/projects/${project._id}`} state={{ projectId: project._id }}>
            <div className='project-card'>
                <h3 className='project-card-name'>{ project.name }</h3>
            </div>
        </Link>
    )
}