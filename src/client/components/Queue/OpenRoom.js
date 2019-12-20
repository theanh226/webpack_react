import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { loadQueue } from '../../actions/queue';
import { END_POINT_SOCKET } from '../../constant/constant';

let socket;
const OpenRoom = ({ user, queues, loadQueue }) => {
  // init Socket.io
  const ENDPOINT = END_POINT_SOCKET;
  socket = io(ENDPOINT);
  const [lengthOfQueue, setLengthOfQueue] = useState(0);
  // set length for infos Queue
  useEffect(() => {
    setLengthOfQueue(queues != null ? queues.length : 0);
  }, [user, queues]);

  // get Queue from Server
  useEffect(() => {
    loadQueue();
  }, []);
  // rerender component when list in queue changed
  useEffect(() => {
    socket.on('listChanged', () => {
      loadQueue();
    });
    socket.on('oneStudentEnteredQueue', () => {
      console.log('oneStudentEnteredQueue');
      loadQueue();
    });
    socket.on('oneStudentLeavedQueue', () => {
      console.log('oneStudentLeavedQueue');
      loadQueue();
    });
  }, []);
  return (
    <div className="bg-main text-light border-top border-light pb-4">
      <div className=" mt-4 d-flex justify-content-center">
        <p className="lead text-center text-light mt-1">
          Queue :<span className="text-success ml-2">{lengthOfQueue}</span>{' '}
          Students
        </p>
        <Link to="/queue">
          <button
            className="btn bg-success ml-2 rounded-circle py-2"
            type="button"
          >
            <i className="text-light fas fa-users mt-1" />
          </button>
        </Link>
      </div>

      <p className="lead text-center text-light mt-3">
        Students are waiting for you.
      </p>
      <div className="text-center">
        <button
          className="btn btn-success btn-lg rounded-0 my-3 px-5 py-3"
          type="button"
          data-toggle="modal"
          data-target="#enterroominfo"
        >
          <p className="lead mb-1">Open Room</p>
        </button>
      </div>
      {/* ------------- MODAL ------------- */}
      {/* <div className="modal fade" id="openreadycheck">
        <div className="modal-dialog">
          <div className="modal-content bg-sub rounded-0">
            <div className="modal-body text-center lead mt-3 mb-0">
              Are you ready to take on the queue?
            </div>
            <div className="modal-footer border-0 d-flex justify-content-around">
              <button
                type="button"
                className="btn bg-success rounded-0 text-light lead px-5 py-2"
                data-toggle="modal"
                data-target="#roominfo"
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
      </div> */}
      {/* ------------- MODAL2 ------------- */}
      <div className="modal fade" id="enterroominfo">
        <div className="modal-dialog">
          <div className="modal-content rounded-0 bg-sub">
            <div className="modal-body rounded-0 text-center lead mt-3 mb-0">
              Enter room number:
            </div>
            <div className="text-center">
              <input
                className="pl-3 w-50"
                type="text"
                placeholder="Eg: 111, 231, ..."
              />
            </div>

            <div className="modal-footer rounded-0 border-0 d-flex justify-content-around">
              <button
                type="button"
                className="btn bg-success rounded-0 text-light lead px-3 py-2"
                data-toggle="modal"
                data-target="#roominfo"
                data-dismiss="modal"
              >
                Goto Room
              </button>
              <button
                type="button"
                className="btn bg-danger rounded-0 text-light lead px-4 py-2"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
OpenRoom.propTypes = {
  user: PropTypes.object,
  loadQueue: PropTypes.func,
  queues: PropTypes.array,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  queues: state.queue.queues,
});
export default connect(mapStateToProps, { loadQueue })(OpenRoom);
