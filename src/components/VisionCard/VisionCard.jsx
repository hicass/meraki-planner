import EasyEdit, { Types } from 'react-easy-edit';
import * as projectsAPI from '../../utilities/project-api';

export default function Mission({ project }) {

    async function saveChanges(newVision) {
        await projectsAPI.update({
            id: project._id,
            attributes: {
                vision: newVision
            }
        });
    }

    return (
        <div className='project-detail-card'>
            <h4 className='project-detail-title'>Vision</h4>

            <div className='project-detail box-shadow'>
                <EasyEdit 
                        value={project.vision}
                        type={Types.TEXTAREA}
                        onSave={saveChanges}
                />
            </div>
        </div>
    )
}