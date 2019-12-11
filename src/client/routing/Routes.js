import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '../components/Test';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Alert from '../layout/Alert';
import PrivateRoute from './PrivateRoute';
import NotFound from '../layout/NotFound';
import Faq from '../components/Faq';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/test" component={Test} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
