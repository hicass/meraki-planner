export default function AddProjectStart({ setAddProjectPageContent }) {
    return (
        <div>
            <h1>AddProjectStart</h1>
            <button onClick={() => setAddProjectPageContent('addName')}>next</button>
        </div>
    )
}