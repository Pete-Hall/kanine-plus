import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import DogList from '../DogList/DogList';
import AddDog from '../AddDog/AddDog';
import DogDetails from '../DogDetails/DogDetails';
import EditDog from '../EditDog/EditDog';
import MasterSchedule from '../MasterSchedule/MasterSchedule';

import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FCB900'
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          size: 'small'
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
          margin: 'normal',
          // multiline: 'true'
        }
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/list" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            <ProtectedRoute
              // logged in shows Dog List else shows LoginPage
              exact
              path="/list"
            >
              <DogList />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Dog Details else shows LoginPage
              exact
              path="/details/:id"
            >
              <DogDetails />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Edit Dog else shows LoginPage
              exact
              path="/edit/:id"
            >
              <EditDog />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Master Schedule else shows LoginPage
              exact
              path="/schedule"
            >
              <MasterSchedule />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Add Dog else shows LoginPage
              exact
              path="/add"
            >
              <AddDog />
            </ProtectedRoute>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
            >
              <InfoPage />
            </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /list page
                <Redirect to="/list" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /list page
                <Redirect to="/list" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /list page
                <Redirect to="/list" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
