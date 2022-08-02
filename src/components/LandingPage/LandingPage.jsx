import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { Button } from '@mui/material';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          To make this application I primarily used:
          </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Redux-Saga</li>
            <li>Material UI</li>
            <li>Node</li>
            <li>Express</li>
            <li>Postgres</li>
            <li>Cloudinary</li>
          </ul>

          <p>
            Roadmap:
          </p>
          <ul>
            <li>Google Maps</li>
            <li>Dynamic Scheduler</li>
            <li>Admin Settings</li>
          </ul>

          <p>
          I want to thank:
          </p>
          <ul>
            <li>Prime Digital Academy</li>
            <li>Dev</li>
            <li>Cohort</li>
            <li>Friends</li>
            <li>Partner + Familiy</li>
          </ul>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <Button onClick={onLogin}>Login</Button>
            {/* <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button> */}
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
