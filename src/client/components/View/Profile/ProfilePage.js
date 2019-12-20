import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import JoinQueue from '../../Queue/JoinQueue';
import LeaveQueue from '../../Queue/LeaveQueue';
import OpenRoom from '../../Queue/OpenRoom';
import ProfileBox from './ProfileBox';
import PersonalInfo from './PersonalInfo';
import { loadUser } from '../../../actions/auth';
import { END_POINT_SOCKET } from '../../../constant/constant';

let socket;
// TODO: SET ALERT KICK OUT DEPEND ON ID
const ProfilePage = ({ user, loadUser, setAlert }) => {
  // init Socket.io
  const ENDPOINT = END_POINT_SOCKET;
  socket = io(ENDPOINT);

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
  }, [user, ENDPOINT]);

  useEffect(() => {
    socket.on('oneStudentEnteredQueue', () => {
      loadUser();
    });
    socket.on('oneStudentLeavedQueue', () => {
      loadUser();
    });
    socket.on('listChanged', () => {
      loadUser();
      // setAlert('Someone has been kicked out of the queue', 'danger');
    });
  }, [loadUser, user]);

  // useEffect(() => {
  //   socket.on('listChanged', () => {
  //     loadUser();
  //     setAlert('Someone has been kicked out of the queue', 'danger');
  //   });
  // }, []);

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
  loadUser: PropTypes.func,
  setAlert: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser, setAlert })(ProfilePage);
