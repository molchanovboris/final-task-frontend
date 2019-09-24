import React, { Component } from 'react';
import classes from './Login.module.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';



export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: this.props.user.email,
      password: this.props.user.password
    };

    this.lohinHandler.bind(this);
  }

  updateFormState = (params) => {
    this.setState(params);
  }

  lohinHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    
    const postData = { ...this.state };
    delete postData.confirmedPassword;


    fetch('http://localhost:5000/auth/login', {
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
    return (
      <div className={classes.Login}>
        <div>
          <Link to="/signup" >Register</Link>
          <h1>Login</h1>

          <form onSubmit={this.lohinHandler} className={classes.LoginForm}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  value={this.state.email} onChange={($event) => this.updateFormState({ ...this.state, email: $event.target.value })} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={this.state.password} onChange={($event) => this.updateFormState({ ...this.state, password: $event.target.value })} />
            
            <button type="submit">Login</button>

          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
}

export default connect(
  mapStateToProps
)(Login);