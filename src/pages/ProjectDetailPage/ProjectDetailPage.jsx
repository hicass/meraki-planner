import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as projectsAPI from '../../utilities/project-api';
import EasyEdit, { Types } from 'react-easy-edit';


export default function ProjectDetailPage({ quote }) {
    const location = useLocation();
    const [project, setProject] = useState({})
    const { projectId } = location.state
    const [editedProject, setEditedProject] = useState({})
    
    useEffect(function() {
        async function renderProject() {
            const userProject = await projectsAPI.getById(projectId);
            setProject(userProject);
        }
        renderProject();
    }, [editedProject]);

    async function saveChanges(newName) {
        const userProject = await projectsAPI.updateName({newName, projectId});
    }

    return (
        <section>
            <div className='easy-edit-editable-h2'>
                <EasyEdit 
                    name='name'
                    value={project.name}
                    type={Types.TEXT}
                    onSave={saveChanges}
                />
            </div>

            <div>
                <p>{quote.text}</p>
                <span>{quote.author}</span>
            </div>

            <div>
                <h3>Mission</h3>
                <p>{project.mission}</p>
            </div>

            <div>
                <h3>Vision</h3>
                <p>{project.vision}</p>
            </div>

        </section>
    )
}