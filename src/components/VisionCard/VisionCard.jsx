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
        <>
            <h4>Vision</h4>
            <EasyEdit 
                    value={project.vision}
                    type={Types.TEXTAREA}
                    onSave={saveChanges}
            />
        </>
    )
}