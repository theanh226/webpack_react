import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import Routes from './routing/Routes';
import LandingPage from './components/LandingPage';
// import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// App.propTypes = {
//   title: PropTypes.string,
// };

export default App;
