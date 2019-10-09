import React from 'react';
import { connect } from 'react-redux';
import  TopNav from '../TopNav';
import { getUser, editUser } from '../../redux/action/editUser.thunk';
import jwt_decode from 'jwt-decode';
import history from '../../history';
import { reduxForm } from "redux-form";







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
       console.log((username, password));
       this.props.editUser((username, password));
      }

    componentDidMount() {
        const tokens = localStorage.getItem('token');
        // console.log(tokens);
        if (!tokens) {
            history.replace('/login');
        } else {
            this.setState(() => (
                {
                    ...jwt_decode(tokens)

                }
            ),() => console.log(this.state)
            );
        }
        // this.props.editUser();
    }

    changeUsername = e => {
        // console.log(e.target.value);
        this.setState({username: e.target.value})
    }
    
    changePassword = e => {
        // console.log(e.target.value)
        console.log(this.state.password)
    }

    onClick = async () => {
        await this.props.editUser();
        console.log(this.props.editUser())
    }
    render () {
        
        const { username } = this.state;
        // console.log(username, this.state.password)
        return(
            <>
            <TopNav />
            <form 
                onSubmit={this.props.handleSubmit(this.editHandler)}
                className="ui form error">
                <div>
                    <h1>Edit</h1>
                </div>
                <span>Useranme</span>
                <input value={username} onChange={this.changeUsername}/>
                <span>Password</span>
                <input onChange={this.changePassword}/>
                
            
            <button className="ui button primary" onClick={this.onClick}>Edit</button>
            </form>
            
            

            </>
        );
    }
}


const formWrapped = reduxForm({
    form: 'EditPage'
    
    
  }
    
  )(EditPage);

export default connect((state) => ({
    // user: state.editUser.user,
    // loading: state.editUser.loading,
    // error: state.editUser.error
}), {
    getUser, 
    editUser
}) (formWrapped);
