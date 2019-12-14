import React from 'react';
import QueueCard from './QueueCard';
import '../View/view.css';

const Queue = () => {
  return (
    <div>
      <div className="queue col-4 bg-sub p-3">
        <div className="lead bg-sub-light text-center py-4 text-light">
          Q u e u e &nbsp;&nbsp; l i s t
        </div>
        <ul className="list-group p-0">
          <li className="list-group-item p-0 border-top-0 border-color-sub">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 border-color-sub">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 border-color-sub">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 border-color-sub">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 border-color-sub">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 border-color-sub">
            <QueueCard />
          </li>
          <li className="list-group-item p-0 border-0">
            <QueueCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Queue;
