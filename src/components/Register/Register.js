import React, { Component } from 'react';
import classes from './Register.module.css';
import Input from '../input/input';
import axios from 'axios';
// import { CLIENT_RENEG_LIMIT } from 'tls';
// import classes from '*.module.sass';

export default class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.registerHandler.bind(this);
  }

  
  registerHandler = () => {
    console.log(this);
    axios.post('http://localhost:5000/auth/register', { username: this.state.username , email: this.state.email, password: this.state.password })
    .then(res => {
      console.log('http good');
      console.log(res);
    });
  }

  updateFormState = (params) => {
    this.setState(params);
  }

  render() {
    return (
      <div className={classes.Register}>
        <div>
          <h1>Registrer</h1>

          <form onSubmit={this.registerHandler} className={classes.RegisterForm}>
            <Input label="Username" value={this.state.username} onChange={($event) => this.updateFormState({ ...this.state, username: $event.target.value })}/>
            <Input label="Email" value={this.state.email} onChange={($event) => this.updateFormState({ ...this.state, email: $event.target.value })} />
            <Input 
              label="Password" value={this.state.password} onChange={($event) => this.updateFormState({ ...this.state, password: $event.target.value })} 
              errorMessage={'ERROR'}
            />
            <Input 
              label="Confirm password" 
              errorMessage={'ERROR'}
            />

            <button 
              type="submit"
            > 
              Register
            </button>

          </form>
        </div>
      </div>
    )
  }
}