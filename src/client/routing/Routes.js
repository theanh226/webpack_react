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
// import TutorCard from '../components/Queue/TutorCard';
import PickTutor from '../components/View/PickTutor';
import QueueView from '../components/Queue/QueueView';
import TutorChatRoom from '../components/Chat/TutorChatRoom';

const Routes = () => {
  return (
    <section className="masthead">
      <div className="position-absolute w-100 z-1000">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Alert />
      </div>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/queue" component={Queue} />
        <PrivateRoute exact path="/pick-tutor" component={PickTutor} />
        <PrivateRoute exact path="/chat" component={ChatView} />
        <PrivateRoute exact path="/tutor-room" component={TutorChatRoom} />

        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PrivateRoute exact path="/queue-view" component={QueueView} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
