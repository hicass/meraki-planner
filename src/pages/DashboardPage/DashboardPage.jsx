import NavArea from '../../components/NavArea/NavArea';
import AllProjectsPage from '../AllProjectsPage/AllProjectsPage';
import './DashboardPage.css';

export default function DashboardPage({ user, handleLogOut }) {
    return (
       <main id='dashboard-container'>
            <NavArea user={user} handleLogOut={handleLogOut} />
            <AllProjectsPage />
       </main>
    )
}