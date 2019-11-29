import React from 'react';
import PropTypes from 'prop-types';
import Test from './Test';

function App({ title }) {
  const test = 'just one test text';
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <h4>{test}</h4>
      <Test />
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string,
};

export default App;
