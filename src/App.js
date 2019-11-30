import React from 'react';
import PropTypes from 'prop-types';
import Test from './Test';
import joker from '../vendor/img/joker_time.jpg';

function App({ title }) {
  const test = 'just one test text';
  return (
    <div className="container">
      <h1 className="text-success text-center">{title}</h1>
      <div className="row mt-2">
        <div className="col-xl-4">
          <h4 className="text-danger">{test}</h4>
          <i className="fas fa-cogs text-info" />
        </div>
        <div className="col-xl-4">
          <Test />
        </div>
        <div className="col-xl-4 ">
          <Test />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img src={joker} alt="joker" />
      </div>
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string,
};

export default App;
