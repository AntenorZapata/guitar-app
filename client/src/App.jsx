import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import PrivateRoute from './components/routing/PrivateRoute';
import Config from './pages/Account/Config';
import history from './service/history';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import About from './pages/About';
import './App.css';

import UserData from './pages/UserData';
import Reviews from './pages/Reviews';

import { getGuitars } from './actions';
import AdminPanel from './pages/AdminPanel';

export default function App() {
  const dispatch = useDispatch();

  const initialErrorState = {
    email: { valid: true, text: '' },
    password: { valid: true, text: '' },
    name: { valid: true, text: '' },
  };

  useEffect(() => {
    dispatch(getGuitars());
  }, []);

  const [error, setError] = useState(initialErrorState);

  return (
    <div>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/config" component={Config} />
          <PrivateRoute exact path="/favs" component={Favorites} />
          {/* <PrivateRoute exact path="/userdata" component={UserData} /> */}
          <PrivateRoute exact path="/reviews" component={Reviews} />

          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                error={error}
                setError={setError}
                initial={initialErrorState}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <Signup error={error} setError={setError} initial={initialErrorState} />
            )}
          />
          <Route
            exact
            path="/forgotPassword"
            render={() => (
              <ForgotPassword error={error} setError={setError} initial={initialErrorState} />
            )}
          />
          <Route
            exact
            path="/passwordReset/:token"
            render={(props) => (
              <ResetPassword
                {...props}
                error={error}
                setError={setError}
                initial={initialErrorState}
              />
            )}
          />
          <Route
            exacttoken
            path="/guitarDetails/:id"
            render={(props) => (
              <Details {...props} />
            )}
          />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/admin" component={AdminPanel} />
          <Route path="*" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
