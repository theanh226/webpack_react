import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
  return (
    <div>
      <Link to="/">
        <div className="w-25 d-flex justify-content-around bg-dark align-items-center p-2">
          <div>
            <img
              src="https://mmart.de/wp-content/uploads/2017/09/Avatar-Icon-1.jpg"
              alt="avatar"
              width="80"
              height="80"
              className="rounded-circle mr-2"
            />
          </div>
          <div className="text-light">
            <p className="lead mb-2">Minh Anh Nguyen</p>
            <div>
              <div className="d-flex justify-content-start">
                <i className="fas fa-circle text-success mt-1 mr-2" />
                <div className="font-weight-light font-italic">In Queue</div>
              </div>
              <div className="d-flex justify-content-start">
                <i className="fas fa-circle text-danger mt-1 mr-2" />
                <div className="font-weight-light font-italic">
                  Not in Queue.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;
