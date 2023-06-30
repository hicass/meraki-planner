import { useNavigate } from 'react-router-dom';
import * as projectsAPI from '../../utilities/project-api';
import './DeleteConfirmation.css'


export default function DeleteConfirmation({ setDeleteConfirmation, projectId }) {
    const navigate = useNavigate();

    async function deleteProject() {
        await projectsAPI.deleteProject({
            id: projectId
        })
        navigate('/')
    }

    return (
        <div id='delete-conf-container'>
            <h3 id='delete-h3'>Oh no!</h3>
            <p id='delete-p'>Are you sure you want to delete this project?</p>

            <div id='delete-btn-container'>
                <button id='cancel-btn' className='delete-btn' onClick={() => setDeleteConfirmation(false)}>nevermind</button>
                <button id='confirm-del-btn' className='delete-btn' onClick={deleteProject}>delete plz</button>
            </div>
        </div>
    )
}