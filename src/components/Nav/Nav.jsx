import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let userRole = 'user';
  // default value for user is 1. (1 = user) (2 = admin)
  if( user.role === 2) {
    userRole = 'admin'
  };

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Kanine+</h2>
      </Link>
      <p>Welcome, {user.username}! ({userRole})</p>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            
            <Link className="navLink" to="/list">
              Dog List
            </Link>

            <Link className="navLink" to="/add">
              Add Dog
            </Link>

            <Link className="navLink" to="/schedule">
              Master Schedule
            </Link>
            
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
