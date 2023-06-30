export default function AddProjectInfo({ handleChange, handleSubmit, newProjectInfo }) {
    return (
        <form onSubmit={handleSubmit}>
            <label>project name?</label>
            <input 
                name='name'
                type='text'
                value={newProjectInfo.name}
                onChange={handleChange}
                required
            />

            <label>project mission?</label>
            <input 
                name='mission'
                type='text' 
                value={newProjectInfo.mission}
                onChange={handleChange}
                required
            />

            <label>project vision?</label>
            <input 
                name='vision'
                type='text' 
                value={newProjectInfo.vision}
                onChange={handleChange}
                required
            />

            <button type='submit' >ok!</button>
        </form>
    )
}