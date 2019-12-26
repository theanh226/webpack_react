import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const InfoBox = ({ user }) => {
  const [infos, setInfos] = useState({
    type: 'Student',
    mail: 'etc@gmail.com',
  });
  const { type, mail } = infos;
  useEffect(() => {
    if (user != null) {
      setInfos({
        type: user.type,
        mail: user.email,
      });
    }
  }, [user]);
  return (
    <div>
      <div className="d-flex bg-main flex-column align-items-center pt-4 pb-3 pr-3 pl-4">
        <div className="w-100 d-flex text-light">
          <p className="col-lg-3 col-md-6 pl-1 text-md-right pr-md-5">Type:</p>
          <div className="col-md-6">
            <div className="d-flex justify-content-start">
              <p className="font-weight-light font-italic">{type}</p>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex text-light text-truncate">
          <p className="col-lg-3 col-md-6 pl-1 text-md-right pr-md-5">Mail:</p>
          <div className="col-md-6">
            <div className="d-flex justify-content-start text-truncate">
              <p className="font-weight-light font-italic">{mail}</p>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex text-light text-truncate">
          <p className="col-lg-3 col-md-6 pl-1 text-md-right pr-md-3 pr-md-5">
            Motto:
          </p>
          <div className="col-md-6">
            <div className="d-flex justify-content-start ">
              <div className="font-weight-light font-italic col-9 text-truncate p-0">
                A hard learning student ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(InfoBox);
