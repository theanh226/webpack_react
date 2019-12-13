import React from 'react';

const QueueOpen = () => {
  return (
    <div className="bg-dark text-light border-top border-light pb-3">
      <p className="lead text-center text-light mt-3">
        Queue :<span className="text-success ml-2">100</span>
        <i className="fas fa-user ml-2 mt-1" />
      </p>
      <div className="text-center">
        <button
          className="OpenRoom btn btn-success btn-lg rounded-pill my-3 px-5 py-3"
          type="button"
        >
          <p className="lead mb-1">Join Room</p>
        </button>
      </div>
    </div>
  );
};

export default QueueOpen;
