import { useState, useEffect } from 'react';
import * as quoteAPI from '../../utilities/quote-api';

export default function AllProjectsPage() {
    const [quote, setQuote] = useState({})

    useEffect(function() {
        async function generateQuote(){
            const newQuote = await quoteAPI.get();
            setQuote(newQuote);
        }
        generateQuote()
    }, [])

    return (
        <section id='all-projects-container'>
            <div>
                <h2>all projects</h2>

                <div>
                    <p>{quote.text}</p>
                    <span>{quote.author}</span>
                </div>
            </div>
        </section>
    )
}