import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QueueTutorCard from '../Queue/TutorCard';

const PickTutor = ({ user }) => {
  const [infos, setInfos] = useState({
    name: 'ABC',
    avatar: 'https://dummyimage.com/400x400/000/fff',
    status: 'Offline',
  });
  const { name, avatar, status } = infos;
  useEffect(() => {
    if (user != null) {
      setInfos({
        name: user.name,
        avatar: user.avatar,
        status: user.status,
      });
    }
  }, [user]);

  return (
    <div>
      <div className="picktutor container d-flex bg-sub pb-4 pt-4">
        {/* Here */}
        <div className="queue col-8 bg-sub pt-0 px-3 pb-3">
          <div className="lead bg-main text-center py-4 text-light">
            A v a i l a b l e &nbsp;&nbsp; T u t o r
          </div>
          <ul className="list-group p-0">
            <li className="list-group-item p-0 border-top-0 border-color-sub">
              <QueueTutorCard />
              <QueueTutorCard />
              <QueueTutorCard />
              <QueueTutorCard />
              <QueueTutorCard />
              <QueueTutorCard />
              <QueueTutorCard />
              <QueueTutorCard />
            </li>
          </ul>
        </div>
        {/* Endhere */}
        <div className="col-4 bg-sub p-0">
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
              <p className="col-3">Status:</p>
              <div>
                <div className="d-flex justify-content-start ml-3">
                  <i className="fas fa-circle text-success mt-1 mr-2" />
                  <div className="font-weight-light font-italic">{status}</div>
                </div>
                <div className="d-none justify-content-start ml-3">
                  <i className="fas fa-circle text-danger mt-1 mr-2" />
                  <div className="font-weight-light font-italic">Offline</div>
                </div>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="bg-main text-light border-top-sub-light pb-4 align-item-center">
            <p className="lead text-center text-light mt-4">
              Queue :<span className="text-success ml-2">100</span>
              <i className="fas fa-user ml-2 mt-1" />
            </p>
            <p className="lead text-center text-light mt-3">
              Below is your number:
            </p>
            <div className="d-flex justify-content-center py-2">
              <div className="circle border border-light rounded-circle">
                <p className="display-3 mt-4 text-center">1</p>
              </div>
            </div>
            <p className="lead text-center text-light mt-3">
              You can now choose a Tutor to go to the Chat Room
            </p>
            <div className="text-center">
              <button
                className="btn btn-danger btn-lg rounded-0 my-3 px-5 py-3"
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <p className="lead mb-1">Leave Queue</p>
              </button>
            </div>
            {/* ------------- MODAL ------------- */}
            <div className="modal fade" id="exampleModal">
              <div className="modal-dialog ">
                <div className="modal-content bg-sub rounded-0">
                  <div className="modal-body text-center lead mt-3 mb-0">
                    Do you want to leave the queue?
                  </div>
                  <div className="modal-footer border-0 d-flex justify-content-around">
                    <button
                      type="button"
                      className="btn bg-success rounded-0 text-light lead px-5 py-2"
                      data-dismiss="modal"
                      //   onClick={() => PickTutor(id)}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn bg-danger rounded-0 text-light lead px-5 py-2"
                      data-dismiss="modal"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProfilePage.propTypes = {
//   user: PropTypes.object,
// };
PickTutor.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PickTutor);
