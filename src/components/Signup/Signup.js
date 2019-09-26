import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Signup.module.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
// import thunk from "redux-thunk";
import { createSignup } from '../../redux/action/auth.thunk';
import { Field, reduxForm } from "redux-form";


const GlobalStyle = createGlobalStyle`
  html {
    color: red;
  }
`;


export class Signup extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label} </label>
        <input {...input} autoComplete="off" type={type} />
        {this.renderError(meta)}

      </div>
    );
  }

  
  registerHandler = formValues => {
    console.log(formValues);
    this.props.createSignup(formValues);
  }

  render() {
    return (      
          <form
            onSubmit={this.props.handleSubmit(this.registerHandler)}
            className="ui form error"
          >  
            <div className="ui secondary pointing menu">
              <Link className="right menu" to="/login">Log In</Link>
            </div>
            
            <h1>Sign Up</h1>
            <Field
              name="username"
              type="text"
              component={this.renderInput}
              label="Username"

            />
              
            <Field
              name="email"
              type="email"
              component={this.renderInput}
              label="Email"
              placeholder="Email"
   
            />

            <Field
              name="password"
              type="password"
              component={this.renderInput}
              label="Password"
  
            />

            <Field
              name="confirmPassword"
              type="password"
              component={this.renderInput}
              label="Confirm Password"
  
            />
              
            
            <button className="ui button primary"  >Sign Up</button>
            
          </form>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     user: state.signup
//   }
// }

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username";
  }
  if (!formValues.email) {
    errors.email = "You must enter a email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  if (formValues.confirmPassword !== formValues.password) {
    errors.confirmPassword = "You must enter a confirmPassword";
  }

  return errors;

};

const formWrapped = reduxForm({
  form: 'Signup',
  validate
}
  // ,
  //   mapStateToProps,   
  //   { signup }
)(Signup);

export default connect(null, { createSignup })(formWrapped);

