import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      const user = await signUp(formData);
      this.props.setUser(user);

    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className='auth-content-area'>
        <div>
          <h2 className='auth-content-h2'>welcome!</h2>
          <p className='auth-content-p'>
            Thank you for choosing Meraki Planner! We're excited to have you on board as 
            you embark on your next project journey. Get ready to stay organized, motivated, 
            and inspired as you turn your dreams into reality.
          </p>
        </div>

        <div className='auth-form-container'>
          <form className='auth-form box-shadow' autoComplete='off' onSubmit={this.handleSubmit}>
            <label className='auth-form-label'>Name</label>
            <input 
              className='auth-form-input' 
              type='text' name='name' 
              value={this.state.name} 
              onChange={this.handleChange} 
              required 
            />

            <label className='auth-form-label'>Email</label>
            <input 
              className='auth-form-input' 
              type='email' 
              name='email' 
              value={this.state.email} 
              onChange={this.handleChange} 
              required 
            />


            <label className='auth-form-label'>Password</label>
            <input 
              className='auth-form-input' 
              type='password' name='password' 
              value={this.state.password} 
              onChange={this.handleChange} 
              required 
            />

            <label className='auth-form-label'>Confirm Password</label>
            <input 
              className='auth-form-input' 
              type='password' 
              name='confirm' 
              value={this.state.confirm} 
              onChange={this.handleChange} 
              required 
            />

            <button className='auth-form-btn'type='submit' disabled={disable}>sign up</button>
          </form>

          <p className='auth-error-message'>&nbsp;{this.state.error}</p>
        </div>
      </div>
    );
  }
}