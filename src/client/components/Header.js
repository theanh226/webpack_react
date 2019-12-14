import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../../vendor/img/logo1.png';
import { logout } from '../actions/auth';

const Header = ({ logout }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-main shadow ">
        <div className="container">
          <Link className="navbar-brand" to="/">
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
                      href="#!"
                      onClick={logout}
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
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Header);
