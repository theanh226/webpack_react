import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PersonalInfo = ({ user }) => {
  // console.log(user.createdDate);
  const [infos, setInfos] = useState({
    status: '',
    type: '',
    like: 0,
    name: '',
    email: '',
    createdDate: '',
  });

  const { status, type, like, name, email, createdDate } = infos;

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
        <div className="w-100 text-light mb-4">
          <h1 className="lead f-3 text-center">W E L C O M E &nbsp;{name}</h1>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6 pl-5">Name:</p>
          <p className="col-6 font-weight-light">{name}</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6 pl-5">Status:</p>
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
          <p className="col-6 pl-5">User Typ:</p>
          <p className="col-6 font-weight-light">{type}</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6 pl-5">Like:</p>
          <p className="col-6 font-weight-light">{like}</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6 pl-5">Mail:</p>
          <a
            className="col-6 text-truncate text-light font-italic font-weight-light"
            href="mailto:veri_nic3@yahoo.de"
          >
            {email}
          </a>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6 pl-5">Fach:</p>
          <p className="col-6 font-weight-light">Something about programming</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6 pl-5">Create Date:</p>
          <p className="col-6 font-weight-light">{createdDate}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="col-xl-2 col-lg-3 col-md-4 text-light mt-3 p-0">
          <Link to="/faq">
            <button
              className="btn bg-main text-light rounded-0 pt-3 px-3"
              type="button"
            >
              <p className="lead">Go to Faq</p>
            </button>
          </Link>
        </div>
        <button
          className="btn bg-main rounded-0 col-xl-4 col-lg-3 col-md-4 text-light mt-3 pt-3"
          type="button"
        >
          <p className="lead">Change Information</p>
        </button>
      </div>
    </div>
  );
};

PersonalInfo.propTypes = {
  user: PropTypes.object,
};

export default PersonalInfo;
