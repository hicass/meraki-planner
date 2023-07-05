import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);

    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='auth-content-area'>
      <div>
        <h2 id='login-h2' className='auth-content-h2'>welcome back!</h2>
        <p id='login-p' className='auth-content-p'>
            Thrilled to have you here again, ready to conquer new project milestones? Let's pick up 
            where we left off and continue turning your dreams into reality :)
        </p>
      </div>

      <div className='auth-form-container'>
        <form id='login-form' className='auth-form box-shadow' autoComplete='off' onSubmit={handleSubmit}>
          <label className='auth-form-label'>Email</label>
          <input 
            className='auth-form-input' 
            type='text' 
            name='email' 
            value={credentials.email} 
            onChange={handleChange} 
            required 
          />

          <label className='auth-form-label'>Password</label>
          <input 
            className='auth-form-input' 
            type='password' 
            name='password' 
            value={credentials.password} 
            onChange={handleChange} 
            required 
          />

          <button className='auth-form-btn' type='submit'>log in</button>
        </form>

        <p className='auth-error-message'>&nbsp;{error}</p>
      </div>
    </div>
  );
}