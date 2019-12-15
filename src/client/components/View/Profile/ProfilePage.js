import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JoinQueue from '../../Queue/JoinQueue';
import LeaveQueue from '../../Queue/LeaveQueue';
import OpenRoom from '../../Queue/OpenRoom';
import ProfileBox from './ProfileBox';
import PersonalInfo from './PersonalInfo';

const ProfilePage = ({ user }) => {
  const [infos, setInfos] = useState({
    type: 'Student',
    status: 'Online',
  });

  const { type, status } = infos;

  useEffect(() => {
    if (user != null) {
      setInfos({
        id: user.id,
        type: user.type,
        status: user.status,
      });
    }
  }, [user]);

  return (
    <div className="masthead">
      <div className="container d-flex bg-sub pb-4 pt-4">
        <div className="personalInfo col-8 pl-4">
          <PersonalInfo user={user} />
        </div>
        <div className="col-4">
          <ProfileBox />
          {viewBtn(type, status)}
        </div>
      </div>
    </div>
  );
};

const viewBtn = (userType, userStatus) => {
  let view;
  if (userType === 'Student' && userStatus === 'Online') {
    view = <JoinQueue />;
  } else if (userType === 'Tutor' && userStatus === 'Online') {
    view = <OpenRoom />;
  } else if (userType === 'Student' && userStatus === 'In Queue') {
    view = <LeaveQueue />;
  }
  return view;
};

ProfilePage.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfilePage);
