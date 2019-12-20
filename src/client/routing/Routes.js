import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Alert from '../layout/Alert';
import PrivateRoute from './PrivateRoute';
import NotFound from '../layout/NotFound';
import Faq from '../components/Faq';
import Queue from '../components/Queue/Queue';
import ProfilePage from '../components/View/Profile/ProfilePage';
import ChatBox from '../components/Chat/ChatBox';
import ChatView from '../components/Chat/ChatView';
import TutorCard from '../components/Queue/TutorCard';

const Routes = () => {
  return (
    <section className="masthead">
      <div className="position-absolute w-100 z-1000">
        <Alert />
      </div>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/chat" component={ChatBox} />
        <Route exact path="/chat-view" component={ChatView} />
        <Route exact path="/tutor-card" component={TutorCard} />

        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
