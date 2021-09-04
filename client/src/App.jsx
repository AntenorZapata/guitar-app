import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import GuitarCard from './components/guitarCard/GuitarCard';
import Form from './components/form/Form';

import { getGuitars } from './actions/guitars';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuitars());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/resetPassword" component={ResetPassword} />

      </Switch>
      {/* <GuitarCard />
      <Form /> */}
    </div>
  );
}
