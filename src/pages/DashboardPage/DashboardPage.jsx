import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import NavArea from '../../components/NavArea/NavArea';
import AllProjectsPage from '../AllProjectsPage/AllProjectsPage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import AddProjectPage from '../AddProjectPage/AddProjectPage';
import * as quoteAPI from '../../utilities/quote-api';
import './DashboardPage.css';


export default function DashboardPage({ user, handleLogOut }) {
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

    return (
       <main id='dashboard-container'>
            <NavArea user={user} greeting={greeting} handleLogOut={handleLogOut}  />
            <Routes>
                <Route path='/' element={<AllProjectsPage quote={quote} />} />
                <Route path='/projects/:projectId' element={<ProjectDetailPage quote={quote} />} />
                <Route path='/addProject' element={<AddProjectPage />} />
            </Routes>
       </main>
    )
}