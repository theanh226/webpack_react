import React from 'react';
import QueueCard from './QueueCard';
import './view.css';

const Queue = () => {
  return (
    <div>
      <div className="queue col-4 bg-dark p-3">
        <div className="lead bg-success text-center py-4 text-light">
          Q u e u e &nbsp;&nbsp; l i s t
        </div>
        <ul className="list-group">
          <li className="list-group-item p-0 ml-2 border-top-0">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 ml-2">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 ml-2">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 ml-2">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 ml-2">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 ml-2">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 ml-2 border-0">
            <QueueCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Queue;
