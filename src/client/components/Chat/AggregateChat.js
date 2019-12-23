import React from 'react';
import PropTypes from 'prop-types';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

const AggregateChat = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return (
    <div>
      {isSentByCurrentUser ? (
        <SentMessage text={text} />
      ) : (
        <ReceivedMessage text={text} name={user} />
      )}
    </div>
  );
};

AggregateChat.propTypes = {
  message: PropTypes.object,
  name: PropTypes.string,
};

export default AggregateChat;
