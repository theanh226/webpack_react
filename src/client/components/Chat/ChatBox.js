/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ScrollToBottom from 'react-scroll-to-bottom';
import './chat.css';
import AggregateChat from './AggregateChat';

const ChatBox = ({ messages, name }) => {
  return (
    <div>
      <div className="messages-view bg-sub pt-3 pb-4 pr-3 pl-3">
        <div>
          <ScrollToBottom className="chat">
            {messages.map((message, index) => (
              <div key={index}>
                <AggregateChat message={message} name={name} />
              </div>
            ))}
          </ScrollToBottom>
        </div>
      </div>
    </div>
  );
};

ChatBox.propTypes = {
  messages: PropTypes.array,
  name: PropTypes.string,
};

export default ChatBox;
