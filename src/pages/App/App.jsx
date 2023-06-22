import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as userService from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <main className="App">
      { user ?
          <>
            <h1>You are logged in!</h1>
            <nav>
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
