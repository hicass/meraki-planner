import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as projectAPI from '../../utilities/project-api';
import AddProjectStart from '../../components/AddProjectStart/AddProjectStart';
import AddProjectInfo from '../../components/AddProjectInfo/AddProjectInfo';
import './AddProjectPage.css'


export default function AddProjectPage() {
    const [addProjectPageContent, setAddProjectPageContent] = useState('start');
    const [newProjectInfo, setNewProjectInfo] = useState({
        name: '',
        mission: '',
        vision: '',
    });
    const navigate = useNavigate();

    function renderAddProjectPage() {
        if (addProjectPageContent === 'start') {
            return <AddProjectStart setAddProjectPageContent={setAddProjectPageContent} />
        } else if (addProjectPageContent === 'addInfo') {
            return <AddProjectInfo newProjectInfo={newProjectInfo} handleChange={handleChange} handleSubmit={handleSubmit} />
        } 
    }    

    function handleChange(evt) {
        setNewProjectInfo({
            ...newProjectInfo,
            [evt.target.name]: evt.target.value
        });
    }


    async function handleSubmit(evt) {
        evt.preventDefault();
        const project = await projectAPI.addProject(newProjectInfo);
        navigate(`/projects/${project._id}`, {state:{projectId: project._id}});
    }
    

    return (
        <section id='add-proj-container'>
                { renderAddProjectPage() }
        </section>
    )
}