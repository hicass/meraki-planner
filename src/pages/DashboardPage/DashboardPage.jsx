import NavArea from '../../components/NavArea/NavArea';
import './DashboardPage.css';

export default function DashboardPage({ user, handleLogOut }) {
    return (
       <main id='dashboard-container'>
            <NavArea user={user} handleLogOut={handleLogOut} />
       </main>
    )
}