import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/login" className="item">
        Login
      </Link>

      <Link to="/" className="item">
        Register
      </Link>
    </div>
    );
};

export default Header;