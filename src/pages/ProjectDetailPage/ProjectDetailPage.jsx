import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as projectsAPI from '../../utilities/project-api';
import EasyEdit, { Types } from 'react-easy-edit';
import MissionCard from '../../components/MissionCard/MissionCard';
import VisionCard from '../../components/VisionCard/VisionCard';
import TodosContainer from '../../components/TodosContainer/TodosContainer';
import DeleteConfirmation from '../../components/DeleteConfirmation/DeleteConfirmation';
import './ProjectDetailPage.css';


export default function ProjectDetailPage({ quote }) {
    const location = useLocation();
    const [project, setProject] = useState({});
    const [todos, setTodos] = useState([]);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const { projectId } = location.state;
    
    
    useEffect(function() {
        async function renderProject() {
            const userProject = await projectsAPI.getById(projectId);
            setProject(userProject);
            setTodos(userProject.todos);
        }
        renderProject();
        // eslint-disable-next-line
    },[]);

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
            return <DeleteConfirmation setDeleteConfirmation={setDeleteConfirmation} projectId={projectId}/>
        } else if (deleteConfirmation === false) {
            return <button className='delete-btn' onClick={() => setDeleteConfirmation(true)}>delete this project</button>
        } 
    }

    
    return (
        <section id='details-section'>

            <div className='dash-top'>
                <div className='easy-edit-editable-h2'>
                    <EasyEdit 
                        value={project.name}
                        type={Types.TEXT}
                        onSave={saveChanges}
                    />
                </div>

                <div className='quote-container box-shadow'>
                    <p className='quote-text'>{quote.text}</p>
                    <span className='quote-author'>- {quote.author} -</span>
                </div>
            </div>

            <div id='project-detail-container'>
                <MissionCard project={project} />
                <VisionCard project={project} />
            </div>

            <div className='box-shadow' id='todo-container'>
                <TodosContainer project={project} projectId={projectId} todos={todos} setTodos={setTodos}/>
            </div>

            <div id='delete-container'>
                { renderDelete() }
            </div>

        </section>
    )
}