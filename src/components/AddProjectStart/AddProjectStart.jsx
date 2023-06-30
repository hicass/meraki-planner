import './AddProjectStart.css'

export default function AddProjectStart({ setAddProjectPageContent }) {
    return (
        <div id='add-proj-start-div'>
            <h2 id='add-proj-start-h2'>amazing!</h2>
            <p id='add-proj-start-p'>So you are embarking on a journey with a new project? Congratulations!</p>
            <button className='add-proj-btn' onClick={() => setAddProjectPageContent('addInfo')}>lets get started</button>
        </div>
    )
}