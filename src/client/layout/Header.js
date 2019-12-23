import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import logo from '../../../vendor/img/logo1.png';
import { leaveQueueStudent } from '../actions/queue';
import { END_POINT_SOCKET } from '../constant/constant';
import { logout } from '../actions/auth';

let socket;
const Header = ({ logout, leaveQueueStudent, user }) => {
  // init Socket.io
  const ENDPOINT = END_POINT_SOCKET;
  socket = io(ENDPOINT);
  const [infos, setInfos] = useState({
    id: '',
  });
  const { id } = infos;
  useEffect(() => {
    setInfos({
      id: user != null ? user._id : 1,
    });
  }, [user]);
  const useLogout = async () => {
    leaveQueueStudent();
    socket.emit('studentLeaveQueue');
    logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-main shadow ">
        <div className="container">
          <Link className="navbar-brand pl-4" to="/">
            <img src={logo} alt="logo" className="img" width="100" />
          </Link>
          <a
            className="d-flex mt-2 mr-3"
            href="/"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <p className="lead text-light mr-1">Logout</p>
            <i className="fas fa-sign-out-alt fa-1x text-light mt-2" />
          </a>
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
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  logout,
  leaveQueueStudent,
})(Header);
