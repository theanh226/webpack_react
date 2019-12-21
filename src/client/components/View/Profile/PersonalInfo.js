import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PersonalInfo = ({ user }) => {
  const [infos, setInfos] = useState({
    status: '',
    type: '',
    like: 0,
    name: '',
    email: '',
    createdDate: '',
  });

  const { status, type, like, name, email } = infos;

  const newDate = user != null ? user.createdDate.toString() : '';

  useEffect(() => {
    if (user != null) {
      setInfos({
        status: user.status,
        type: user.type,
        like: user.like,
        name: user.name,
        email: user.email,
        createdDate: Date(newDate),
      });
    }
  }, [user]);
  return (
    <div>
      <div className="d-flex bg-main flex-column align-items-center pt-5 pb-5 pr-3 pl-3 rounded-0">
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
            <div className="d-none justify-content-start ml-3">
              <div className="font-weight-light font-italic">Offline</div>
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
          <p className="col-5 col-md-6 col-lg-6 pl-0 pl-md-5 pl-lg-5">Like:</p>
          <p className="col-7 col-md-6 col-lg-6 font-weight-light">{like}</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-5 col-md-6 col-lg-6 pl-0 pl-md-5 pl-lg-5">Mail:</p>
          <a
            className="ol-7 col-md-6 col-lg-6 text-truncate text-light font-italic font-weight-light"
            href="mailto:veri_nic3@yahoo.de"
          >
            {email}
          </a>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-5 col-md-6 col-lg-6 pl-0 pl-md-5 pl-lg-5">Fach:</p>
          <p className="col-7 col-md-6 col-lg-6 font-weight-light">
            Something about programming
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <Link to="/faq">
          <button
            className="btn bg-main text-light rounded-0 pt-3 px-3 text-light mt-3 pb-3"
            type="button"
          >
            <p className="lead pt-2">Go to Faq</p>
          </button>
        </Link>
        <button
          className="btn bg-main rounded-0 col-xl-4 col-lg-3 col-md-4 col-6 text-light mt-3 p-0"
          type="button"
        >
          <p className="lead text-light pt-2">Change Information</p>
        </button>
      </div>
    </div>
  );
};

PersonalInfo.propTypes = {
  user: PropTypes.object,
};

export default PersonalInfo;
