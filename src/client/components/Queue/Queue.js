import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import QueueCard from './QueueCard';
import '../View/view.css';
import './queue.css';
import { loadQueue } from '../../actions/queue';
import Spinner from '../../layout/Spinner';
import { END_POINT_SOCKET } from '../../constant/constant';

let socket;

const Queue = ({ queue, loadQueue, loading }) => {
  // init Socket.io
  const ENDPOINT = END_POINT_SOCKET;
  socket = io(ENDPOINT);

  const [queueLists, setQueueList] = useState([]);

  useEffect(() => {
    setQueueList(queue);
  }, [loading, loadQueue, queueLists, queue]);

  useEffect(() => {
    loadQueue();
    setQueueList(queue);
  }, [loading]);

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

  return <div>{buildViewQueue(loading, queueLists)}</div>;
};
const buildViewQueue = (loading, queueLists) => {
  let view;
  if (queueLists === undefined || queueLists === null) {
    view = <Spinner />;
  } else {
    view = (
      <div className="bg-sub">
        <div className="lead bg-main text-center py-4 text-light">
          Q u e u e &nbsp;&nbsp; l i s t
        </div>

        <ul className="list-group p-0">
          {queueLists.map(user => (
            <li className="list-group-item p-0 border-top-0 border-color-sub">
              <QueueCard
                key={user._id}
                id={user._id}
                name={user.name}
                status={user.status}
                avatar={user.avatar}
              />
            </li>
          ))}
          <li className="list-group-item bg-sub p-0 border-top-0 border-color-sub phantom-user">
            |
            <li className="list-group-item bg-sub p-0 border-top-0 border-color-sub phantom-user">
              |
            </li>
          </li>
        </ul>
      </div>
    );
  }
  return view;
};

Queue.propTypes = {
  loadQueue: PropTypes.func,
  loading: PropTypes.bool,
  queue: PropTypes.array,
};

const mapStateToProps = state => ({
  queue: state.queue.queues,
  loading: state.queue.loading,
});
export default connect(mapStateToProps, { loadQueue })(Queue);
