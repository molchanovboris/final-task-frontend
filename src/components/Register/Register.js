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
      formControls: {
        username: {
          value: '',
          type: 'username',
          label: 'Username',
          errorMassage: 'enter the correct email',
        },
        email: {
          value: '',
          type: 'email',
          label: 'Email',
          errorMassage: 'enter the correct email',
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: '',
          type: 'password',
          label: 'Password',
          errorMassage: 'enter the correct password',
          touched: false,
          validation: {
            required: true,
            minLength: 6
          }
        }
      }
    };

    this.registerHandler.bind(this);
  }

  
  registerHandler = () => {
    console.log(this);
    axios.post('http://localhost:5000/auth/register', { username: this.state.formControls.username , email: this.state.formControls.email, password: this.state.formControls.password })
    .then(res => {
      console.log('http good');
      console.log(res);
    });
  }

  updateFormState = (params) => {
    this.setState(params);
  }

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value)
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
    
  }

  render() {
    return (
      <div className={classes.Register}>
        <div>
          <h1>Registrer</h1>

          <form onSubmit={this.registerHandler} className={classes.RegisterForm}>



            <Input label="Username" value={this.state.formControls.username} onChange={($event) => this.updateFormState({ ...this.state, username: $event.target.value })}/>
            <Input label="Email" value={this.state.formControls.email} onChange={($event) => this.updateFormState({ ...this.state, email: $event.target.value })} />
            <Input 
              label="Password" value={this.state.formControls.password} onChange={($event) => this.updateFormState({ ...this.state, password: $event.target.value })} 
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