import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function LandingPage() {
  return (
    <div>
      <Link to="/test">to Test component</Link>
      <h3>This is landing page</h3>
    </div>
  );
}

// LandingPage.propTypes = {};

export default LandingPage;
