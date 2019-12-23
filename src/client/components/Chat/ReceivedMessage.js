import React from 'react';

const ReceivedMessage = () => {
  return (
    <div>
      <div className="d-flex justify-content-start">
        <div>
          <img
            src="https://dummyimage.com/400x400/000/fff"
            alt="avatar"
            width="50"
            height="50"
            className="rounded-circle mt-4"
          />
        </div>
        <div className="text-light w-80">
          <p className="ml-3 font-italic mb-0 font-small">Dummy User</p>
          <p className="ml-2 py-2 pl-3 bg-sub-light ">
            ReceivedMessage is this line. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
