import React from 'react';

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
              <button type="button" className="btn bg-light">
                Goto Faq
              </button>
            </div>
            <div className="col-6 text-left">
              <button type="button" className="btn bg-danger text-light">
                Goto Lounge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
