import { Link } from 'react-router-dom';
import mothra from '../../assets/mothra.jpg';
import './NavArea.css'

export default function NavArea({ user, handleLogOut, greeting, setDashPageContent }) {
    return (
        <nav id='nav-area'>
            <div>
                <h1 id='nav-h1'>meraki planner</h1>

                <div id='nav-user-info'>
                    <img id='user-avatar' src={mothra} alt='User avatar' />
                        <span id='user-greeting'>{ greeting }, {user.name}</span>
                </div>

                <div id='nav-links-container'>
                    <Link className='nav-link nav-btn-hover' to='' onClick={() => setDashPageContent('allProjects')}>all projects</Link>
                    <Link className='nav-link nav-btn-hover' to='' onClick=''>start new</Link>
                </div>
            </div>

            <div id='nav-bottom'>
                <Link className='nav-link nav-btn-hover' to='' onClick={handleLogOut}>log out</Link>
            </div>
        </nav>
    )
}