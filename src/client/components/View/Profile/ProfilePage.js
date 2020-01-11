import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import JoinQueue from '../../Queue/JoinQueue';
import LeaveQueue from '../../Queue/LeaveQueue/LeaveQueue';
import OpenRoom from '../../Queue/OpenRoom/OpenRoom';
import ProfileBox from './ProfileBox';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import { getPosition } from '../../Queue/helpFuncQueue';
import { loadQueue } from '../../../actions/queue';
import { loadUser } from '../../../actions/auth';
import { END_POINT_SOCKET } from '../../../constant/constant';
import PickTutor from '../PickTutor';
import '../../../style.css';

let socket;
// TODO: SET ALERT KICK OUT DEPEND ON ID
const ProfilePage = ({ user, loadUser, setAlert, queues, loadQueue }) => {
  const [infos, setInfos] = useState({
    type: 'Student',
    status: 'Online',
    id: '',
  });
  const { type, status, id } = infos;

  useEffect(() => {
    // init Socket.io
    const ENDPOINT = END_POINT_SOCKET;
    socket = io(ENDPOINT);
    if (user != null) {
      setInfos({
        id: user._id,
        type: user.type,
        status: user.status,
      });
    }
  }, [user, queues, END_POINT_SOCKET]);

  useEffect(() => {
    loadQueue();
  }, []);

  useEffect(() => {
    socket.on('oneStudentEnteredQueue', () => {
      loadUser();
      loadQueue();
    });
    socket.on('oneStudentLeavedQueue', () => {
      loadUser();
      loadQueue();
    });
    socket.on('listChanged', () => {
      loadUser();
      loadQueue();
      // setAlert('Someone has been kicked out of the queue', 'danger');
    });
  }, []);

  // useEffect(() => {
  //   socket.on('listChanged', () => {
  //     loadUser();
  //     setAlert('Someone has been kicked out of the queue', 'danger');
  //   });
  // }, []);

  return (
    <div className="masthead">
      <div className="container fix-height d-md-flex bg-sub pb-4 pt-4">
        <div className="col-12 col-sm-12 col-md-7 col-lg-8 pl-3">
          {viewRoomTutorOrBasicInfos(getPosition(queues, id), user)}
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-4 mt-3 mt-sm-3 mt-md-0 mt-lg-0">
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

const viewRoomTutorOrBasicInfos = (position, user) => {
  let view;
  if (position === 1) {
    view = <PickTutor />;
  } else {
    view = <PersonalInfo user={user} />;
  }
  return view;
};

ProfilePage.propTypes = {
  user: PropTypes.object,
  loadUser: PropTypes.func,
  setAlert: PropTypes.func,
  queues: PropTypes.array,
  loadQueue: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  queues: state.queue.queues,
});

export default connect(mapStateToProps, { loadUser, setAlert, loadQueue })(
  ProfilePage,
);
