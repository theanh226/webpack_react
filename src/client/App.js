import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Switch, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import Routes from './routing/Routes';
import LandingPage from './components/LandingPage';
// import Test from './components/Test';

function App() {
  return (
    <HashRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </div>
    </HashRouter>
  );
}

// App.propTypes = {
//   title: PropTypes.string,
// };

export default App;
