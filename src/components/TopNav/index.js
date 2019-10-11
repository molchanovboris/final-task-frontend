import React from 'react';
// import history from '../../history';
import { Nav, NavItem, NavLink } from 'reactstrap';



const TopNav = () => {

  // const goToWeather = () => history.replace('/weather');
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
            <NavLink href="/Login" active>LogOut</NavLink>
          </NavItem>
        </Nav>
      </Nav>
    </div>
  )
}
export default TopNav;