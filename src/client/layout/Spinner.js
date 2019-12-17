import React, { Fragment } from 'react';
import spinner from '../../../vendor/img/spinner.gif';

export default () => (
  <Fragment>
    <div className="d-flex justify-content-center align-items-center">
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  </Fragment>
);
