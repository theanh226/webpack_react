import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { leaveQueueStudent, loadQueue } from '../../../actions/queue';
import { END_POINT_SOCKET } from '../../../constant/constant';
import { getPosition } from '.././helpFuncQueue';
import './LeaveQueue.css';

let socket;
const LeaveQueue = ({ user, leaveQueueStudent, queues, loadQueue }) => {
  const [infos, setInfos] = useState({
    id: '',
  });
  const [lengthOfQueue, setLengthOfQueue] = useState(0);

  const { id } = infos;

  useEffect(() => {
    // init Socket.io
    const ENDPOINT = END_POINT_SOCKET;
    socket = io(ENDPOINT);
    if (user != null) {
      setInfos({
        id: user._id,
      });
    }
    setLengthOfQueue(queues != null ? queues.length : 0);
  }, [user, queues, END_POINT_SOCKET]);

  // get Queue from Server
  useEffect(() => {
    loadQueue();
  }, []);

  useEffect(() => {
    socket.on('listChanged', () => {
      loadQueue();
    });
    socket.on('oneStudentEnteredQueue', () => {
      loadQueue();
    });
    socket.on('oneStudentLeavedQueue', () => {
      loadQueue();
    });
  }, []);

  const studentLeaveQueue = () => {
    leaveQueueStudent();
    socket.emit('studentLeaveQueue');
  };
  return (
    <div className="bg-main text-light border-top border-light pb-4 align-item-center">
      <p className="lead text-center text-light mt-4">
        Queue :<span className="text-success ml-2">{lengthOfQueue}</span>
        <i className="fas fa-user ml-2 mt-1" />
      </p>
      <p className="lead text-center text-light mt-3">Below is your number:</p>
      <div className="d-flex justify-content-center py-2">
        <div className="rainbow">
          <p className="display-3 mt-4 text-center">
            {getPosition(queues, id)}
          </p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-danger btn-lg rounded-0 my-3 px-4 py-3"
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
          <div className="modal-content bg-sub">
            <div className="modal-body text-center lead mt-3 mb-0">
              Do you want to leave the queue?
            </div>
            <div className="modal-footer border-0 d-flex justify-content-around">
              <button
                type="button"
                className="btn bg-success text-light lead px-5 py-2"
                data-dismiss="modal"
                onClick={() => studentLeaveQueue()}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn bg-danger text-light lead px-5 py-2"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
LeaveQueue.propTypes = {
  user: PropTypes.object,
  leaveQueueStudent: PropTypes.func,
  loadQueue: PropTypes.func,
  queues: PropTypes.array,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  queues: state.queue.queues,
});
export default connect(mapStateToProps, { leaveQueueStudent, loadQueue })(
  LeaveQueue,
);
