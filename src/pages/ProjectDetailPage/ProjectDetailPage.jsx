import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as projectsAPI from '../../utilities/project-api';
import EasyEdit, { Types } from 'react-easy-edit';
import MissionCard from '../../components/MissionCard/MissionCard';
import VisionCard from '../../components/VisionCard/VisionCard'


export default function ProjectDetailPage({ quote }) {
    const location = useLocation();
    const [project, setProject] = useState({})
    const { projectId } = location.state
    
    useEffect(function() {
        async function renderProject() {
            const userProject = await projectsAPI.getById(projectId);
            setProject(userProject);
        }
        renderProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    async function saveChanges(newName) {
        await projectsAPI.update({
            id: projectId,
            attributes: {
                name: newName
            }
        });
    }

    return (
        <section>
            <div className='easy-edit-editable-h2'>
                <EasyEdit 
                    value={project.name}
                    type={Types.TEXT}
                    onSave={saveChanges}
                />
            </div>

            <div>
                <p>{quote.text}</p>
                <span>{quote.author}</span>
            </div>

            <MissionCard project={project} />
            <VisionCard project={project} />

        </section>
    )
}