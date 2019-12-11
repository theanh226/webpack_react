import React from 'react';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div>
      <div className="masthead d-flex align-items-center text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-light font-weight-light">
                W E L C O M E &nbsp; t o &nbsp; I N F O H O R S E
              </h1>
              <p className="lead text-light">
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
