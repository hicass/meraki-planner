import { useState } from 'react';
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
        console.log(newProjectInfo)
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log(newProjectInfo);
        await projectAPI.addProject(newProjectInfo);
    }

    return (
        <section id='add-proj-container'>
                { renderAddProjectPage() }
        </section>
    )
}