import { useState } from 'react';
import AddProjectStart from "../../components/AddProjectStart/AddProjectStart";
import AddProjectName from '../../components/AddProjectName/AddProjectName';
import AddProjectMission from '../../components/AddProjectMission/AddProjectMission';
import AddProjectVision from '../../components/AddProjectVision/AddProjectVision';


export default function AddProjectPage() {
    const [addProjectPageContent, setAddProjectPageContent] = useState('start');

    function renderAddProjectPage() {
        if (addProjectPageContent === 'start') {
            console.log(addProjectPageContent)
            return <AddProjectStart setAddProjectPageContent={setAddProjectPageContent} />
        } else if (addProjectPageContent === 'addName') {
            console.log(addProjectPageContent)
            return <AddProjectName setAddProjectPageContent={setAddProjectPageContent} />
        } else if (addProjectPageContent === 'addMission') {
            console.log(addProjectPageContent)
            return <AddProjectMission setAddProjectPageContent={setAddProjectPageContent} />
        } else if (addProjectPageContent === 'addVision') {
            console.log(addProjectPageContent)
            return <AddProjectVision setAddProjectPageContent={setAddProjectPageContent} />
        }
    }    

    return (
        <section>
            { renderAddProjectPage() }
        </section>
    )
}