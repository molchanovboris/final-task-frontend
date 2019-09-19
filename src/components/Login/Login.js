import React, { Component } from 'react';
import classes from './Login.module.css';
import Input   from '../input/input';
import axios from 'axios';
import is from 'is_js';



export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.loginHandler.bind(this);
  }

  

  state = {
    formControls: {
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
  }

  loginHandler = () => {
    console.log(this);
    axios.post('http://localhost:5000/auth/login', { email: this.state.email, password: this.state.password })
    .then(res => {
      console.log('login good');
      console.log(res);
    });

  }

  updateFormState = (params) => {
    this.setState(params);
  }

  
  
  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid

    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validate(control.value, control.validation)

    formControls[controlName] = control

    this.setState({
      formControls
    })
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
          errorMassage={control.errorMassage}
          onChange={event => this.onChangeHandler(event, controlName)}
         />
      )
    })
  }

  render() {
    return (
      <div className={classes.Login}>
          <div>
          <h1>Authorization</h1>

          <form onSubmit={this.loginHandler} className={classes.LoginForm}> 
            <Input label="Email" value={this.state.email} onChange={($event) => this.updateFormState({ ...this.state, email: $event.target.value })} />
            <Input 
              label="Password" value={this.state.password} onChange={($event) => this.updateFormState({ ...this.state, password: $event.target.value })} 
              errorMessage={'ERROR'}
            />
            
            <button 
              type="submit" 
              onClick={this.loginHandler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}