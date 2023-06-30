import EasyEdit, { Types } from 'react-easy-edit';
import * as projectsAPI from '../../utilities/project-api';

export default function Mission({ project }) {

    async function saveChanges(newMission) {
        await projectsAPI.update({
            id: project._id,
            attributes: {
                mission: newMission
            }
        });
    }

    return (
        <>
            <h4>Mission</h4>
            <EasyEdit 
                    value={project.mission}
                    type={Types.TEXTAREA}
                    onSave={saveChanges}
            />
        </>
    )
}