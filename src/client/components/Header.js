import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../vendor/img/logo1.png';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-pale-green shadow ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="img" width="100" />
          </Link>
          <div>
            {/* User and user setting */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="./link">
                  <p className="text-light mt-2 mb-2">Hello User</p>
                </a>
              </li>
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
                    <a className="dropdown-item text-light" href="/link">
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

export default Header;
