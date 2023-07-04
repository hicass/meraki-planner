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
        <div className='project-detail-card'>
        <h4 className='project-detail-title'>Mission</h4>

        <div className='project-detail'>
            <EasyEdit 
                value={project.mission}
                type={Types.TEXTAREA}
                onSave={saveChanges}
            />
        </div>
    </div>
    )
}