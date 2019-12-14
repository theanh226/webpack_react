import React from 'react';

const ProfileCard = () => {
  return (
    <div>
      <div className="d-flex justify-content-between bg-sub-light align-items-center p-2">
        <div>
          <img
            src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-master-graduate-icon-png-image_3258192.jpg"
            alt="avatar"
            width="60"
            height="60"
            className="rounded-circle mr-2"
          />
        </div>
        <div className="text-light ml-2">
          <p className="lead mb-0">Minh Anh Nguyen</p>
          <div>
            <div className="d-flex justify-content-start">
              <i className="fas fa-circle text-success mt-1 mr-2" />
              <div className="font-weight-light font-italic">In Queue</div>
            </div>
            <div className="d-none justify-content-start">
              <i className="fas fa-circle text-danger mt-1 mr-2" />
              <div className="font-weight-light font-italic">Not in Queue.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
