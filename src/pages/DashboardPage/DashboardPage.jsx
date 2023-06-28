import { useState, useEffect } from 'react';
import NavArea from '../../components/NavArea/NavArea';
import AllProjectsPage from '../AllProjectsPage/AllProjectsPage';
import * as quoteAPI from '../../utilities/quote-api';
import './DashboardPage.css';

export default function DashboardPage({ user, handleLogOut }) {
    const [quote, setQuote] = useState({})

    useEffect(function() {
        async function generateQuote(){
            const newQuote = await quoteAPI.get();
            setQuote(newQuote);
        }
        generateQuote()
    }, [])

    return (
       <main id='dashboard-container'>
            <NavArea user={user} handleLogOut={handleLogOut} />
            <AllProjectsPage quote={quote} />
       </main>
    )
}