import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

import { joinQueue, loadQueue } from '../../actions/queue';
import { END_POINT_SOCKET } from '../../constant/constant';

let socket;
const JoinQueue = ({ user, joinQueue, queues, loadQueue }) => {
  const ENDPOINT = END_POINT_SOCKET;
  socket = io(ENDPOINT);
  const [infos, setInfos] = useState({
    id: '',
  });
  const [lengthOfQueue, setLengthOfQueue] = useState(0);

  const { id } = infos;
  useEffect(() => {
    setInfos({
      id: user != null ? user._id : '',
    });
    setLengthOfQueue(queues != null ? queues.length : 0);
  }, [user, queues]);

  useEffect(() => {
    loadQueue();
  }, [loadQueue]);

  useEffect(() => {
    socket.on('listChanged', () => {
      loadQueue();
    });
  }, [user, loadQueue]);

  const studentJoinQueue = studentId => {
    joinQueue(studentId);
    socket.emit('studentJoinQueue');
  };
  return (
    <div className="bg-main text-light border-top border-light pb-4 align-item-center">
      <p className="lead text-center text-light mt-4">
        Queue :<span className="text-success ml-2">{lengthOfQueue}</span>
        <i className="fas fa-user ml-2 mt-1" />
      </p>
      <p className="lead text-center text-light mt-3">
        Your number if drawn now:
      </p>
      <div className="d-none justify-content-center py-2">
        <div className="circle border border-light rounded-circle">
          <p className="display-3 mt-4  text-center">12</p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-success btn-lg rounded-0 my-3 px-5 py-3"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <p className="lead mb-1">Join Queue</p>
        </button>
      </div>

      {/* ------------- MODAL ------------- */}
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content bg-sub">
            <div className="modal-body text-center lead mt-3 mb-0">
              Do you want to join the queue?
            </div>
            <div className="modal-footer border-0 d-flex justify-content-around">
              <button
                type="button"
                className="btn bg-success text-light lead px-5 py-2"
                data-dismiss="modal"
                onClick={() => studentJoinQueue(id)}
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
JoinQueue.propTypes = {
  user: PropTypes.object,
  joinQueue: PropTypes.func,
  queues: PropTypes.array,
  loadQueue: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  queues: state.queue.queues,
});
export default connect(mapStateToProps, { joinQueue, loadQueue })(JoinQueue);
