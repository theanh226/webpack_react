import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '../components/Test';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/test" component={Test} />
      </Switch>
    </section>
  );
};
export default Routes;
