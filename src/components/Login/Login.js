import React, { Component } from 'react';
// import classes from './Login.module.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import { createGlobalStyle } from "styled-components";
// import thunk from "redux-thunk";
import { createLogin } from '../../redux/action/auth.thunk';
import { Field, reduxForm } from "redux-form";


// const GlobalStyle = createGlobalStyle`
//   html {
//     color: red;
//   }
// `;


export class Login extends Component {

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


  
  loginHandler = formValues => {
    console.log(formValues);
    this.props.createLogin(formValues);
  }

  render() {
    if (this.props.loading) return <h1>LOADING...</h1>
    return (      
          <form
            onSubmit={this.props.handleSubmit(this.loginHandler)}
            className="ui form error"
          >
            <div className="ui secondary pointing menu">
              <Link className="right menu" to="/signup"><a className="ui active button"><i class="user icon"></i>Sign Up</a></Link>
            </div> 
            <h1>Log In</h1>
            <Field
              name="email"
              type="email"
              component={this.renderInput}
              label="Email"
   
            />
            <Field
              name="password"
              type="password"
              component={this.renderInput}
              label="Password"
  
            />
            
            
            <button className="ui button primary">Log In</button>
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

  if (!formValues.email) {
    errors.email = "You must enter a email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  
  return errors;

};

const formWrapped = reduxForm({
  form: 'Login',
  validate
}
  // ,
  //   mapStateToProps,   
  //   { signup }
)(Login);

const mapStateToProps = (state) => ({
  loading: state.auth.loginLoading,
})

export default connect(mapStateToProps, { createLogin })(formWrapped);

