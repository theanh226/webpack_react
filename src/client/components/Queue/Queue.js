import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QueueCard from './QueueCard';
import '../View/view.css';
import { loadQueue } from '../../actions/queue';
import Spinner from '../../layout/Spinner';

const Queue = ({ queue, loadQueue, loading }) => {
  const [queueLists, setQueueList] = useState([]);

  useEffect(() => {
    setQueueList(queue);
  }, [loading, loadQueue, queueLists, queue]);

  useEffect(() => {
    loadQueue();
    setQueueList(queue);
  }, [loading]);

  return <div>{buildViewQueue(loading, queueLists)}</div>;
};
const buildViewQueue = (loading, queueLists) => {
  let view;
  if (queueLists === undefined || queueLists === null) {
    view = <Spinner />;
  } else {
    view = (
      <div className="queue col-4 bg-sub p-3">
        <div className="lead bg-sub-light text-center py-4 text-light">
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
