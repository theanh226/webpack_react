import React from 'react';
import QueueOpen from './QueueOpen';
import ProfileBox from './ProfileBox';
import PersonalInfo from './PersonalInfo';

function ProfilePage() {
  return (
    <div className="masthead">
      <div className="personalPage container d-flex bg-dark pb-5 pt-3">
        <div className="col-8 pl-4">
          <PersonalInfo />
        </div>
        <div className="col-4">
          <ProfileBox />
          <QueueOpen />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
