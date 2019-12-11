import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large color-pale-green mt-5">
        <i className="fas fa-exclamation-triangle" /> Page Not Found
      </h1>
      <p className="large mb-5">Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
