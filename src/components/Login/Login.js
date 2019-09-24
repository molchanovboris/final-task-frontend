import React, { Component } from 'react';
import classes from './Login.module.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
// import thunk from "redux-thunk";
import { createLogin } from '../../redux/action/auth.thunk';
import { Field, reduxForm } from "redux-form";


const GlobalStyle = createGlobalStyle`
  html {
    color: red;
  }
`;


export class Login extends React.Component {

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


  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   // username: this.props.user.username,
  //   //   email: this.props.user.email,
  //   //   password: this.props.user.password,
  //   //   confirmedPassword: ''
  //   // };

  //   // this.registerHandler.bind(this);
  // }



  updateFormState = (params) => {
    this.setState(params);
  }



  // registerHandler = (event) => {
  //   console.log(event);
  //   // event.preventDefault();
  //   // console.log(event);

  //   // const postData = { ...this.state };
  //   // delete postData.confirmedPassword;

  //   // this.props.signup(this.state);

  //   // itemsFetchData()
  //   // fetch('http://localhost:5000/auth/register', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   //   body: JSON.stringify(postData)
  //   // }).then(res => {
  //   //   console.log(res);
  //   // });
  // }

  loginHandler = formValues => {
    console.log(formValues);
    this.props.createLogin(formValues);

  }







  render() {
    // console.log(this.props);
    return (      
          <form
            onSubmit={this.props.handleSubmit(this.loginHandler)}
            className="ui form error"
          >
            <h1>Login</h1>
                        
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
            
            {/* <input 
              type="email" id="email"  
              value={this.state.email} 
              onChange={($event) => this.updateFormState({ ...this.state, email: $event.target.value })} 
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" id="password" 
              value={this.state.password} 
              onChange={($event) => this.updateFormState({ ...this.state, password: $event.target.value })}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" id="confirmPassword" 
              value={this.state.confirmedPassword} 
              onChange={($event) => this.updateFormState({ ...this.state, confirmedPassword: $event.target.value })}
            /> */}


            <button className="ui button primary">Login</button>
            <Link className="ui button primary" to="/signup">SignUp</Link>
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

export default connect(null, { createLogin })(formWrapped);

