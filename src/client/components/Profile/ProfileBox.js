import React from 'react';
import { Link } from 'react-router-dom';

const ProfileBox = () => {
  return (
    <div>
      <div className="d-flex w-25 bg-dark flex-column align-items-center pt-5 pb-5 pr-3 pl-3">
        <Link to="/">
          <div>
            <img
              src="https://mmart.de/wp-content/uploads/2017/09/Avatar-Icon-1.jpg"
              alt="avatar"
              width="150"
              height="150"
              className="rounded-circle"
            />
            <p className="lead text-light text-center mt-3 mb-4">
              Minh Anh Nguyen
            </p>
          </div>
        </Link>

        <div className="w-100 d-flex text-light">
          <p className="col-6">User Typ:</p>
          <p className="col-6 font-weight-light">Student</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6">Fach:</p>
          <p className="col-6 font-weight-light">Something about programming</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6">Mail:</p>
          <a
            className="col-6 text-truncate text-light font-italic font-weight-light"
            href="mailto:veri_nic3@yahoo.de"
          >
            veri_nic3@yahoo.de
          </a>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6">Endorse:</p>
          <p className="col-6 font-weight-light">+358 Likes</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-6">Status:</p>
          <div>
            <div className="d-flex justify-content-start ml-3">
              <i className="fas fa-circle text-success mt-1 mr-2" />
              <div className="font-weight-light font-italic">In Queue</div>
            </div>
            <div className="d-flex justify-content-start ml-3">
              <i className="fas fa-circle text-danger mt-1 mr-2" />
              <div className="font-weight-light font-italic">Not in Queue.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
