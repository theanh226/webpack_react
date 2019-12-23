import React, { Fragment } from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className="container col-md-6 col-lg-6 pt-5">
        <h1 className="x-large color-pale-green text-center pt-5">
          <div className="d-flex justify-content-center">
            <i className="fas fa-exclamation-triangle text-warning mt-1" />
            <p className="text-light pl-2">PAGE NOT FOUND!!!</p>
          </div>
        </h1>
        <p className="lead mb-4 text-light text-center">
          Uh oh, we can&apos;t seem to find the page you&apos;re looking for.
          Try going back to previous page or see our Faq page for more
          informations.
        </p>
        <div className="redirectBtn text-center mb-5">
          <Link to="/faq">
            <button
              className="btn bg-main text-center rounded-0 px-5 py-3 mt-3"
              type="button"
            >
              <p className="lead text-light mb-1">Go to Faq</p>
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
