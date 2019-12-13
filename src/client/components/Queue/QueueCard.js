import React from 'react';
import ProfileCard from '../View/Profile/ProfileCard';

const QueueCard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-10 p-0">
          <ProfileCard />
        </div>
        <div className="col-2 p-0 bg-sub-light">
          <button
            className="btn h-50 btn-danger rounded-0 mt-3 ml-2 px-3"
            type="button"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueueCard;
