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
          <div>
            {/* User and user setting */}
            <ul className="navbar-nav ml-auto">
              {/* setting drop down */}
              <li className="nav-item active">
                <div className="nav-link btn-group">
                  <button
                    type="button"
                    className="btn shadow-none"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-cogs text-light mt-1" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right bg-dark">
                    <a className="dropdown-item text-light" href="/link">
                      Your Account
                    </a>
                    <a className="dropdown-item text-light" href="/link">
                      Change Information
                    </a>
                    <div className="dropdown-divider" />
                    <a
                      className="dropdown-item text-light"
                      href="/login"
                      onClick={() => useLogout(id)}
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
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
