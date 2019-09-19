import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.Header}>
      <Link to="/login" className={classes.Header}>
        Login
      </Link>

      <Link to="/" className={classes.Header}>
        Register
      </Link>
    </div>
    );
};

export default Header;