import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as projectsAPI from '../../utilities/project-api';
import EasyEdit, { Types } from 'react-easy-edit';
import MissionCard from '../../components/MissionCard/MissionCard';
import VisionCard from '../../components/VisionCard/VisionCard';
import DeleteConfirmation from '../../components/DeleteConfirmation/DeleteConfirmation';


export default function ProjectDetailPage({ quote }) {
    const location = useLocation();
    const [project, setProject] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false)
    const { projectId } = location.state
    
    useEffect(function() {
        async function renderProject() {
            const userProject = await projectsAPI.getById(projectId);
            setProject(userProject);
        }
        renderProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function saveChanges(newName) {
        await projectsAPI.update({
            id: projectId,
            attributes: {
                name: newName
            }
        });
    }

    function renderDelete() {
        if (deleteConfirmation === true) {
            console.log(deleteConfirmation)
            return <DeleteConfirmation setDeleteConfirmation={setDeleteConfirmation} projectId={projectId}/>
        } else if (deleteConfirmation === false) {
            return <button onClick={() => setDeleteConfirmation(true)}>delete this project</button>
        } else {
            return <h1>peepee poo pooo</h1>
        }
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

            <div>
                { renderDelete() }
            </div>

        </section>
    )
}