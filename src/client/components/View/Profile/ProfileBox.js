import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProfileBox = ({ user }) => {
  const [infos, setInfos] = useState({
    name: 'ABC',
    avatar: 'https://dummyimage.com/400x400/000/fff',
    type: 'TEST USER',
  });
  const { name, avatar, type } = infos;
  useEffect(() => {
    if (user != null) {
      setInfos({
        name: user.name,
        avatar: user.avatar,
        type: user.type,
      });
    }
  }, [user]);
  return (
    <div>
      <div className="d-flex bg-main flex-column align-items-center pt-5 pb-3 pr-3 pl-4">
        <Link to="/">
          <div>
            <img
              src={avatar}
              alt="avatar"
              width="150"
              height="150"
              className="rounded-circle"
            />
            <p className="lead text-light text-center mt-3 mb-4 text-uppercase">
              {name}
            </p>
          </div>
        </Link>

        <div className="w-100 d-flex text-light">
          <p className="col-3">Type:</p>
          <p className="col-9 font-weight-light ">{type}</p>
        </div>
        <div className="w-100 d-flex text-light">
          <p className="col-3">Status:</p>
          <div>
            <div className="d-flex justify-content-start ml-3">
              <i className="fas fa-circle text-success mt-1 mr-2" />
              <div className="font-weight-light font-italic">Online</div>
            </div>
            <div className="d-none justify-content-start ml-3">
              <i className="fas fa-circle text-danger mt-1 mr-2" />
              <div className="font-weight-light font-italic">Offline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileBox.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileBox);
