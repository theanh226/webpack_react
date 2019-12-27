import React from 'react';
import PropTypes from 'prop-types';

const ReceivedMessage = ({ text, name }) => {
  return (
    <div>
      <div className="d-flex justify-content-start">
        <div className="text-light w-80">
          <p className="ml-3 font-italic mb-0 font-small text-capitalize">
            {name}
          </p>
          <p className="ml-2 py-2 pl-3 pr-3 bg-sub-light text-break">{text}</p>
        </div>
      </div>
    </div>
  );
};

ReceivedMessage.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

export default ReceivedMessage;
