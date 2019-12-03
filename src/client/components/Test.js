import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Test() {
  return (
    <div className="mt-2">
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/chat">Chat Room</Link>
        </li>
      </ul>
      <h3>Test component</h3>
    </div>
  );
}

// Test.propTypes = {};

export default Test;
