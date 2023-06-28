export default function AddProjectName({ setAddProjectPageContent }) {
    return (
        <div>
            <h1>AddProjectName</h1>
            <button onClick={() => setAddProjectPageContent('addMission')}>next</button>
        </div>
    )
}