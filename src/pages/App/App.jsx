import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import * as userService from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
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
          <DashboardPage user={user} handleLogOut={handleLogOut} />
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
