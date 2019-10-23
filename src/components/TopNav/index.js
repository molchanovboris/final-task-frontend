import React from 'react';
import { connect } from "react-redux";
import { Nav, NavItem, NavLink } from 'reactstrap';
import history from "../../history";
import { logOut } from '../../redux/action/auth.actions';


export class TopNav extends React.PureComponent {

  onLogout = () => {
    localStorage.removeItem('token');
    this.props.logOut();
    history.push('/login');
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/weather" active>Weather</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/editpage" active>Edit profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/historylist" active>Request History List</NavLink>
          </NavItem>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink onClick={this.onLogout} active>LogOut</NavLink>
            </NavItem>
          </Nav>
        </Nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps , {logOut})(TopNav);
