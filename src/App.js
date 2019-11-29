import React from 'react';
import PropTypes from 'prop-types';
import Test from './Test';

function App({ title }) {
  const test = 'just one test text';
  return (
    <div className="container">
      <h1 className="text-success text-center">{title}</h1>
      <div className="row mt-2">
        <div className="col-xl-4">
          <h4 className="text-danger">{test}</h4>
        </div>
        <div className="col-xl-4">
          <Test />
        </div>
        <div className="col-xl-4">
          <Test />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string,
};

export default App;
