import React, { Component } from 'react';
import classes from './Signup.module.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';



export class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      password: this.props.user.password,
      confirmedPassword: ''
    };

    this.registerHandler.bind(this);
  }

  updateFormState = (params) => {
    this.setState(params);
  }

  registerHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    
    const postData = { ...this.state };
    delete postData.confirmedPassword;


    fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className={classes.Signup}>
        <div>
          <h1>Registrer</h1>

          <form onSubmit={this.registerHandler} className={classes.SignupForm}>
            <label htmlFor="username">Username</label>
            <input type="username" id="username" value={this.state.username} onChange={($event) => this.updateFormState({ ...this.state, username: $event.target.value })} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  value={this.state.email} onChange={($event) => this.updateFormState({ ...this.state, email: $event.target.value })} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={this.state.password} onChange={($event) => this.updateFormState({ ...this.state, password: $event.target.value })} />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={this.state.confirmedPassword} onChange={($event) => this.updateFormState({ ...this.state, confirmedPassword: $event.target.value })}
            />

            <button type="submit">Register</button>
            <Link to="/login">Login</Link>

          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.signup
  }
}

export default connect(
  mapStateToProps
)(Signup);