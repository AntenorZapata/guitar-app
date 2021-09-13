import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import PrivateRoute from './components/routing/PrivateRoute';
import Config from './pages/Config';
import history from './services/history';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import './App.css';

// import Form from './components/form/Form';

// import { getGuitars } from './actions';

export default function App() {
  // const dispatch = useDispatch();

  const [error, setError] = useState({
    email: { valid: true, text: '' },
    password: { valid: true, text: '' },
    name: { valid: true, text: '' },
  });

  return (
    <div>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/config" component={Config} />
          <PrivateRoute exact path="/favs" component={Favorites} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => (
              <Login error={error} setError={setError} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <Signup error={error} setError={setError} />
            )}
          />
          <Route
            exact
            path="/forgotPassword"
            render={() => (
              <ForgotPassword error={error} setError={setError} />
            )}
          />
          <Route
            exact
            path="/passwordReset/:token"
            render={(props) => (
              <ResetPassword {...props} error={error} setError={setError} />
            )}
          />
          <Route
            exacttoken
            path="/guitarDetails/:id"
            render={(props) => (
              <Details {...props} />
            )}
          />
          <PrivateRoute path="*" component={Login} />
        </Switch>
      </Router>
      {/* <GuitarCard />
      <Form /> */}
    </div>
  );
}
