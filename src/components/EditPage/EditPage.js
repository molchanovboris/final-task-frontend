import React from 'react';
import { connect } from 'react-redux';
import TopNav from '../TopNav';
import { getUser, editUser } from '../../redux/action/editUser.thunk';
import jwt_decode from 'jwt-decode';
import history from '../../history';
import { reduxForm } from "redux-form";
import Button from '../styledComp/Button';
import Title from '../styledComp/Title';


export class EditPage extends React.PureComponent {
  state = {
    username: '',
    email: '',
    password: ''
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  editHandler = (username, password) => {
    this.props.editUser((username, password));
  }

  componentDidMount() {
    const tokens = localStorage.getItem('token');
    if (!tokens) {
      history.replace('/login');
    } else {
      this.setState(() => (
        {
          ...jwt_decode(tokens)

        }
      ), () => console.log(this.state)
      );
    }
  }

  changeUsername = e => {
    this.setState({ username: e.target.value })
  }
  changePassword = e => {
    this.setState({ password: e.target.value })
  }

  onClick = async () => {
    await this.props.editUser(this.state.username, this.state.password);
  }
  render() {
    const { username } = this.state;
    return (
      <>
        <TopNav />
        <form
          onSubmit={this.props.handleSubmit(this.editHandler)}
          className="ui form error">
            
          <div>
            <Title>Edit</Title>
          </div>
          <span>Useranme</span>
          <input value={username} onChange={this.changeUsername} />
          <span>Password</span>
          <input onChange={this.changePassword} />
          <Button onClick={this.onClick}>Edit</Button>
        </form>
      </>
    );
  }
}

const formWrapped = reduxForm({
  form: 'EditPage'
}
)(EditPage);

export default connect(null, {
  getUser,
  editUser
})(formWrapped);
