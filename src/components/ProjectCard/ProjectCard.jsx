import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    return (
        <Link to={`/projects/${project._id}`} state={{ projectId: project._id }}>
            <div>
                <h3>{ project.name }</h3>
            </div>
        </Link>
    )
}