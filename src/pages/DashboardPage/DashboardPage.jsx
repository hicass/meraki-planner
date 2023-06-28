import { useState, useEffect } from 'react';
import NavArea from '../../components/NavArea/NavArea';
import AllProjectsPage from '../AllProjectsPage/AllProjectsPage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import AddProjectPage from '../AddProjectPage/AddProjectPage';
import * as quoteAPI from '../../utilities/quote-api';
import './DashboardPage.css';


export default function DashboardPage({ user, handleLogOut }) {
    const [dashPageContent, setDashPageContent] = useState('allProjects');
    const [greeting, setGreeting] = useState('');
    const [quote, setQuote] = useState({});
    
    
    useEffect(function() {
        const greetingOptions = ['Welcome', 'Howdy', 'Hello', 'Hey', 'Hi', 'Heyyy', 'Sup'];
        async function greetingRandomizer() {
            const randomIndex = Math.floor(Math.random() * greetingOptions.length);
            setGreeting(greetingOptions[randomIndex]);
        }
        greetingRandomizer();

        async function generateQuote(){
            const newQuote = await quoteAPI.get();
            setQuote(newQuote);
        }
        generateQuote();
    }, [])


    function renderDash() {
        if (dashPageContent === 'allProjects') {
            return <AllProjectsPage quote={quote} setDashPageContent={setDashPageContent} />
        } else if (dashPageContent === 'projectDetail') {
            return <ProjectDetailPage />
        } else if (dashPageContent === 'addProject') {
            return <AddProjectPage />
        }
    }

    return (
       <main id='dashboard-container'>
            <NavArea user={user} setDashPageContent={setDashPageContent} greeting={greeting} handleLogOut={handleLogOut}  />
            { renderDash() }
       </main>
    )
}