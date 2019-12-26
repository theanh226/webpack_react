import React from 'react';
import PropTypes from 'prop-types';

const SentMessage = ({ text }) => {
  return (
    <div className="d-flex justify-content-end">
      <div className="text-light w-75">
        <p className="py-2 pl-3 bg-main">{text}</p>
      </div>
    </div>
  );
};

SentMessage.propTypes = {
  text: PropTypes.string,
};

export default SentMessage;
