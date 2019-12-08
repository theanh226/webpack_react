import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '../components/Test';
import Chat from '../components/Chat/Chat';
import Tutor from '../components/Chat/Tutor';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/tutor" component={Tutor} />
      </Switch>
    </section>
  );
};
export default Routes;
