import React from 'react';
import ButtonDropDown from './ButtonDropDown';
import logo from '../vendor/img/logo1.png';
import './style.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light-blue shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="./link">
            <img src={logo} alt="logo" className="img" width="200" />
          </a>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="./link">
                  <p className="text-light mt-2">Hello User</p>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="./link">
                  <ButtonDropDown />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
