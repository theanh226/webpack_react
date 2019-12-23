import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { loadQueue } from '../../actions/queue';
import { setAlert } from '../../actions/alert';
import { createRoomChat } from '../../actions/tutorRoom';
import { END_POINT_SOCKET } from '../../constant/constant';
import './OpenRoom.css';

let socket;
const OpenRoom = ({
  user,
  queues,
  loadQueue,
  createRoomChat,
  setAlert,
  createRoomSuccess,
}) => {
  const [lengthOfQueue, setLengthOfQueue] = useState(0);
  const [room, setRoom] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [redirect, setRedirect] = useState(false);
  // set length for infos Queue
  useEffect(() => {
    // init Socket.io
    const ENDPOINT = END_POINT_SOCKET;
    socket = io(ENDPOINT);
    setName(user != null ? user.name : '');
    setEmail(user != null ? user.email : '');
    setLengthOfQueue(queues != null ? queues.length : 0);
  }, [user, queues, END_POINT_SOCKET]);

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
      loadQueue();
    });
    socket.on('oneStudentLeavedQueue', () => {
      loadQueue();
    });
  }, []);

  // open room func
  const onSubmit = e => {
    e.preventDefault();
    if (room === 0) {
      setAlert('Please enter the room number', 'danger', 3500);
    } else {
      createRoomChat(room);
      // setRedirect(!redirect);
    }
  };
  if (createRoomSuccess === true) {
    return <Redirect to={`/chat?name=${name}&room=${room}&email=${email}`} />;
  }
  return (
    <div className="bg-main text-light border-top border-light">
      <div className="border-bottom mt-2 d-flex justify-content-center">
        <p className="lead text-center text-light">View Queue:</p>
        <Link to="/queue-view">
          <button className="btn bg-success rounded-0 ml-2 px-4" type="button">
            <i className="text-light fas fa-users mt-1" />
          </button>
        </Link>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <p className="lead text-center text-light mb-0">
          Queue:
          <span className="text-success ml-2">{lengthOfQueue}</span> Students
        </p>
      </div>

      <p className="lead text-center text-light mb-0">
        Students are waiting for you.
      </p>
      <div className="text-center pb-2">
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

      <div className="modal fade" id="enterroominfo">
        <div className="modal-dialog">
          <div className="modal-content rounded-0 bg-sub">
            {/* <div className="modal-header">
              <h5 className="modal-title lead text-center">Create Room</h5>
            </div> */}
            <div className="modal-body">
              <div className="text-center">
                <p className="lead">Enter Room Number:</p>
                <input
                  className="w-100 col-10 pl-0 py-2 text-center rounded"
                  type="text"
                  name="room"
                  placeholder="Eg: 111, 231, ..."
                  onChange={e => setRoom(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer rounded-0 d-flex justify-content-around border-0">
              <button
                type="submit"
                className="btn bg-success text-light px-5 py-2"
                data-toggle="modal"
                data-target="#roominfo"
                data-dismiss="modal"
                onClick={e => onSubmit(e)}
              >
                Open
              </button>
              <button
                type="button"
                className="btn bg-danger text-light px-5 py-2"
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
  createRoomChat: PropTypes.func,
  setAlert: PropTypes.func,
  createRoomSuccess: PropTypes.bool,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  queues: state.queue.queues,
  createRoomSuccess: state.tutorRoom.createRoomSuccess,
});
export default connect(mapStateToProps, {
  loadQueue,
  createRoomChat,
  setAlert,
})(OpenRoom);
