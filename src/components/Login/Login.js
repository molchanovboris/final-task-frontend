import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { createLogin } from '../../redux/action/auth.thunk';
import { Field, reduxForm } from "redux-form";
import Button from '../styledComp/Button';
import Title from '../styledComp/Title';
import Wrapper from '../styledComp/Wrapper';


export class Login extends React.PureComponent {

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
    console.log('formValues', formValues);
    this.props.createLogin(formValues);
  }
  

  render() {
    if (this.props.loading) return <h1>LOADING...</h1>
    return (
      <form
        onSubmit={this.props.handleSubmit(this.loginHandler)}
        className="ui form error"
      >
        <Wrapper>
        <div className="ui secondary pointing menu">
          <Button as={Link} className="right menu" to="/signup"><i className="user icon"></i>Sign Up</Button>
        </div>
        
        <Title>Log In</Title>
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
        <Button>Log In</Button>
        </Wrapper>
      </form>
    )
  }
}


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
})(Login);

const mapStateToProps = (state) => ({
  loading: state.auth.loginLoading,
})

export default connect(mapStateToProps, { createLogin })(formWrapped);

