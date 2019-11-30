import React from 'react';

const Test = () => {
  return (
    <div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </button>

        <div className="dropdown-menu">
          <a className="dropdown-item" href="/link">
            Action
          </a>
          <a className="dropdown-item" href="/link">
            Another action
          </a>
          <a className="dropdown-item" href="/link">
            Something else here
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="/link">
            Separated link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Test;
