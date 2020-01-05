import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const Landingpage = () => {
  return (
    <div>
      <div className="masthead d-flex align-items-center text-center fix-height">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-md-flex d-lg-flex justify-content-center">
                <h1 className="wc-board text-light font-weight-light pl-3">
                  W E L C O M E &nbsp;
                </h1>
                <h1 className="wc-board text-light font-weight-light">
                  t o &nbsp;
                </h1>
                <h1 className="wc-board text-light font-weight-light">
                  I N F O H O R S E
                </h1>
              </div>
              <p className="lead text-light mt-3 mt-md-0">
                A great place for tutors and students to communicate
              </p>
            </div>
            <div className="col-6 text-right">
              <Link to="/faq">
                <button type="button" className="btn bg-light">
                  Goto Faq
                </button>
              </Link>
            </div>
            <div className="col-6 text-left">
              <Link to="/login">
                <button type="button" className="btn bg-danger text-light">
                  Goto Lounge
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
