import React, { useEffect } from 'react';
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
import './App.css';

import GuitarCard from './components/guitarCard/GuitarCard';
import Form from './components/form/Form';

import { getGuitars } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuitars());
  }, [dispatch]);

  return (
    <div>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/config" component={Config} />
          <PrivateRoute exact path="/favs" component={Favorites} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/passwordReset/:token" component={ResetPassword} />
          <PrivateRoute path="*" component={Login} />
        </Switch>
      </Router>

      {/* <GuitarCard />
      <Form /> */}
    </div>
  );
}
