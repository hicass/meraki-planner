import { useState } from 'react';
import WelcomeContent from '../../components/WelcomeContent/WelcomeContent';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [pageContent, setPageContent] = useState('welcome');

  function renderContent() {
    if (pageContent === 'welcome') {
      return <WelcomeContent />
    } else if (pageContent === 'signUp') {
      return <SignUpForm setUser={setUser} />
    } else if (pageContent === 'logIn') {
      return <LoginForm setUser={setUser} />
    }
  }

  return (
    <main id='auth-page'>
      <nav id='auth-nav'>
        <h1 id='auth-h1' onClick={() => setPageContent('welcome')}>meraki planner</h1>

        <div id='nav-btn-div'>
          <button className='nav-btn' onClick={() => setPageContent('signUp')}>sign up</button>
          <button className='nav-btn' onClick={() => setPageContent('logIn')}>log in</button>
        </div>
      </nav>

      <section id='auth-content'>
        { renderContent() }
      </section>
    </main>
  );
}