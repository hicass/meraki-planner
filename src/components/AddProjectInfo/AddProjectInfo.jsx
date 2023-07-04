import './AddProjectInfo.css';

export default function AddProjectInfo({ handleChange, handleSubmit, newProjectInfo }) {
    return (
        <form className='project-form' onSubmit={handleSubmit}>
            <label className='project-form-label'>project name?</label>
            <input 
                className='project-form-input'
                name='name'
                type='text'
                value={newProjectInfo.name}
                onChange={handleChange}
                required
            />

            <label className='project-form-label'>what's the mission?</label>
            <p className='project-form-p'>
                This will be your projects North Star, setting clear goals and outcomes can 
                help keep you on track, like a GPS for success! It will remind you why your 
                project is worth pursuing.
            </p>
            <textarea 
                className='project-form-textarea'
                name='mission'
                type='textarea' 
                value={newProjectInfo.mission}
                onChange={handleChange}
                required
            />

            <label className='project-form-label'>what's the vision?</label>
            <p className='project-form-p'>
                Whats the style, vibe, and overall atmosphere you want to create? Just like a 
                skilled painter, a developer's vision breathes life into their project, giving 
                it a unique identity and charm. It's the guiding light that shapes the user 
                experience, the visual aesthetics, and the overall mood.
            </p>
            <textarea 
                className='project-form-textarea'
                name='vision'
                type='text' 
                value={newProjectInfo.vision}
                onChange={handleChange}
                required
            />

            <button className='add-proj-btn' type='submit' >i'm ready!</button>
        </form>
    )
}