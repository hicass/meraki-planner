import { Link } from 'react-router-dom';
import mothra from '../../assets/mothra.jpg';
import './NavArea.css'

export default function NavArea({ user, handleLogOut }) {
    const greetings = ['Welcome', 'Howdy', 'Hello', 'Hey', 'Hi', 'Heyyy', 'Sup']

    function greetingRandomizer() {
        const greetingIndex = Math.floor(Math.random() * greetings.length);
        return greetings[greetingIndex]
    }

    return (
        <nav>
            <div>
                <h1 id='nav-h1'>meraki planner</h1>

                <div id='nav-user-info'>
                    <img id='user-avatar' src={mothra} alt='User avatar' />
                        <span id='user-greeting'>{ greetingRandomizer() }, {user.name}</span>
                </div>

                <div id='nav-links-container'>
                    <Link className='nav-link nav-btn-hover' to='' onClick=''>all projects</Link>
                    <Link className='nav-link nav-btn-hover' to='' onClick=''>start new</Link>
                </div>
            </div>

            <div id='nav-bottom'>
                <Link className='nav-link nav-btn-hover' to='' onClick={handleLogOut}>log out</Link>
            </div>
        </nav>
    )
}