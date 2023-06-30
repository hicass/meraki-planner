import { useNavigate } from 'react-router-dom';
import * as projectsAPI from '../../utilities/project-api';

export default function DeleteConfirmation({ setDeleteConfirmation, projectId }) {
    const navigate = useNavigate();

    async function deleteProject() {
        await projectsAPI.deleteProject({
            id: projectId
        })
        navigate('/')
    }

    return (
        <div>
            <h1>Delete Confirmation</h1>
            <button onClick={() => setDeleteConfirmation(false)}>nevermind</button>
            <button onClick={deleteProject}>im done with it!!!</button>
        </div>
    )
}