import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import './components/Faq/Faq.css';
import Routes from './routing/Routes';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route component={Routes} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

// App.propTypes = {
//   title: PropTypes.string,
// };

export default App;
