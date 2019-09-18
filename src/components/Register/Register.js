import React, { Component } from 'react';
import Input   from '../input';
import axios from 'axios';

export default class Registration extends Component {

  loginHandler = () => {
    axios.post('http://localhost:5000/auth/login', { email: 'someemail@com', password: 'somepass' })
    .then(res => {
      console.log('http good');
      console.log(res);
    });

  }

  registerHandler = (email, password) => {
    // axios.post('http://localhost:5000/auth/login', { email: email, password: password })
    axios.post('http://localhost:5000/auth/register', { username: 'Username', email: 'someemail@com', password: 'somepass', confirmPassword: 'Confirm password' })
    .then(res => {
      console.log('http good');
      console.log(res);
    });
  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div>
          <h1>Registrer</h1>

          <form onSubmit={this.submitHandler}>
            <Input label="Username" />
            <Input label="Email" />
            <Input 
              label="Password" 
              errorMassage={'error'}
            />
            <Input 
              label="Confirm password" 
              errorMassage={'error'}
            />

            <button 
              type="success" 
              onClick={this.registerHandler}
            > 
              Register
            </button>

          </form>
        </div>
      </div>
    )
  }
}