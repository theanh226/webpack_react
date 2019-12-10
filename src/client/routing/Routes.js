import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '../components/Test';
import ProfileBox from '../components/Profile/ProfileBox';
import ProfileCard from '../components/Profile/ProfileCard';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route exact path="/profile-box" component={ProfileBox} />
        <Route exact path="/profile-card" component={ProfileCard} />
      </Switch>
    </section>
  );
};
export default Routes;
