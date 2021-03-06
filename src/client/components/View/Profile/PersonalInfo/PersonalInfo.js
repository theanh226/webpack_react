import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PersonalInfo.css';

const PersonalInfo = ({ user }) => {
  const [infos, setInfos] = useState({
    status: '',
    type: '',
    name: '',
    email: '',
    createdDate: '',
  });

  const { status, type, name, email } = infos;

  const newDate = user != null ? user.createdDate.toString() : '';

  useEffect(() => {
    if (user != null) {
      setInfos({
        status: user.status,
        type: user.type,
        name: user.name,
        email: user.email,
        createdDate: Date(newDate),
      });
    }
  }, [user]);
  return (
    <div>
      <div className="h-302 d-flex bg-main flex-column align-items-center pt-5 pb-5 pb-md-4 pr-3 pl-3 rounded-0">
        <div className="text-light mb-4 d-md-flex d-lg-flex justify-content-center">
          <h1 className="lead f-3">W E L C O M E &nbsp;</h1>
          <h1 className="lead f-3 pl-2">{name}</h1>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-5 col-md-6 col-lg-6 pl-0 pl-md-5 pl-lg-5">Name:</p>
          <p className="col-7 col-md-6 col-lg-6 font-weight-light">{name}</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-5 col-md-6 col-lg-6 pl-0 pl-md-5 pl-lg-5">
            Status:
          </p>
          <div>
            <div className="d-flex justify-content-start ml-3">
              <div className="font-weight-light font-italic">{status}</div>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-5 col-md-6 col-lg-6 pl-0 pl-md-5 pl-lg-5">
            User Typ:
          </p>
          <p className="col-7 col-md-6 col-lg-6 font-weight-light">{type}</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-5 col-md-6 col-lg-6 pl-0 pl-md-5 pl-lg-5">Mail:</p>
          <a
            className="ol-7 col-md-6 col-lg-6 text-truncate text-light font-italic font-weight-light"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
      </div>
      <div className="personalInfo d-flex justify-content-between mt-2 mt-md-3 mt-lg-5">
        <Link to="/faq" className="w-100">
          <button
            className="btn w-100 bg-main text-light rounded-0 pt-lg-4 px-lg-4 text-light mt-lg-5"
            type="button"
          >
            <p className="lead pt-lg-1 pt-md-3 pb-lg-1 mb-3 pt-3">Go to Faq</p>
          </button>
        </Link>
        <button
          className="d-none btn bg-main rounded-0 col-xl-4 col-lg-3 col-md-4 col-6 text-light"
          type="button"
        >
          <p className="lead mb-md-0 pt-md-0 pt-lg-1 pb-lg-1 mb-0">
            Change Information
          </p>
        </button>
      </div>
    </div>
  );
};

PersonalInfo.propTypes = {
  user: PropTypes.object,
};

export default PersonalInfo;
