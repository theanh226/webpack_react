import React from 'react';

const ButtonDropDown = () => {
  return (
    <div>
      <div className="btn-group">
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
    </div>
  );
};

export default ButtonDropDown;
