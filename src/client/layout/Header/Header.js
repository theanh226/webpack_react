import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import logo from '../../../../vendor/img/logo3.png';
import { leaveQueueStudent } from '../../actions/queue';
import { END_POINT_SOCKET, TUTOR_ROOM } from '../../constant/constant';
import { logout } from '../../actions/auth';
import './Header.css';

let socket;
const Header = ({ logout, leaveQueueStudent, user, isAuthenticated }) => {
  // init Socket.io
  const ENDPOINT = END_POINT_SOCKET;
  socket = io(ENDPOINT);
  const [infos, setInfos] = useState({
    nameTutor: '',
    id: '',
    type: 'Student',
  });
  const { id, type, nameTutor } = infos;
  useEffect(() => {
    setInfos({
      id: user != null ? user._id : 1,
      type: user != null ? user.type : 1,
      nameTutor: user != null ? user.name : 'dummy',
    });
  }, [user]);
  const useLogout = studentId => {
    leaveQueueStudent(studentId);
    socket.emit('studentLeaveQueue');
    logout();
  };
  const logoutView = (
    <a
      className="d-flex mt-3 mr-3"
      href="/"
      data-toggle="modal"
      data-target="#logoutModal"
    >
      <p className="lead text-light mr-1">Logout</p>
      <i className="fas fa-sign-out-alt fa-1x text-light mt-2" />
    </a>
  );

  const ViewBtnTutorchat = userType => {
    let view;
    if (userType === 'Tutor') {
      view = (
        <Link
          target="_blank"
          to={`/tutor-room?name=${nameTutor}&room=${TUTOR_ROOM}`}
        >
          <button
            className="btnTutor btn bg-main border text-light mt-1 mb-1 mr-4 py-3 px-3"
            type="button"
          >
            Tutor Chatroom
          </button>
        </Link>
      );
    }
    return view;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-main shadow ">
        <div className="container">
          <Link className="navbar-brand pl-4" to="/">
            <img src={logo} alt="logo" className="img" width="100" />
          </Link>
          <div className="d-flex">
            {isAuthenticated && ViewBtnTutorchat(type)}
            {isAuthenticated && logoutView}
          </div>
        </div>

        {/* ------------- MODAL ------------- */}
        <div className="modal fade" id="logoutModal">
          <div className="modal-dialog">
            <div className="modal-content bg-sub">
              <div className="modal-body text-center text-light lead mt-3 mb-0">
                Do you want to log out?
              </div>
              <div className="modal-footer border-top-0 justify-content-around">
                <a
                  className="btn bg-success text-light lead px-5 py-2"
                  href="/login"
                  type="submit"
                  // data-dismiss="modal"
                  onClick={() => useLogout(id)}
                >
                  Yes
                </a>
                <button
                  className="btn btn-danger text-light lead px-5 py-2"
                  type="button"
                  data-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func,
  leaveQueueStudent: PropTypes.func,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  logout,
  leaveQueueStudent,
})(Header);
