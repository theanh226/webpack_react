import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Alert from '../layout/Alert';
import PrivateRoute from './PrivateRoute';
import NotFound from '../layout/NotFound/NotFound';
import Faq from '../components/Faq/Faq';
import Queue from '../components/Queue/Queue';
import ProfilePage from '../components/View/Profile/ProfilePage';
import ChatView from '../components/Chat/ChatView';
import TutorCard from '../components/Queue/TutorCard';
import PickTutor from '../components/View/PickTutor';
import QueueView from '../components/Queue/QueueView';

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
        <Route exact path="/pick-tutor" component={PickTutor} />
        <Route exact path="/chat" component={ChatView} />
        <Route exact path="/tutor-card" component={TutorCard} />

        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PrivateRoute exact path="/queue-view" component={QueueView} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
