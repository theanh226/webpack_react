import React from 'react';
import { Link } from 'react-router-dom';
import Queue from './Queue';
import ProfileBox from '../View/Profile/ProfileBox';
import OpenRoom from './OpenRoom/OpenRoom';
import './queue.css';

const QueueView = () => {
  return (
    <div className="masthead">
      <div className="container fix-height bg-sub d-md-flex d-lg-flex pb-4 pt-4">
        <div className="queue col-12 col-sm-12 col-md-7 col-lg-8 pl-3">
          <Queue />
          <div className="mt-2 pb-2">
            <Link to="/profile">
              <button
                className="btn btn-danger btn-lg btn-block rounded-0 text-light py-3 px-5"
                type="button"
              >
                <p className="lead mb-1">Lounge</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-4 mt-3 mt-sm-3 mt-md-0 mt-lg-0">
          <ProfileBox />
          <OpenRoom />
        </div>
      </div>
    </div>
  );
};

export default QueueView;
