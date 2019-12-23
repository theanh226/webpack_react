/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ScrollToBottom from 'react-scroll-to-bottom';
import './chat.css';
import AggregateChat from './AggregateChat';

const ChatBox = ({ messages, name }) => {
  return (
    <div>
      <div className="bg-sub pt-4 pb-4 pr-3 pl-3">
        <div>
          <ScrollToBottom className="chat">
            {messages.map((message, index) => (
              <div key={index}>
                <AggregateChat message={message} name={name} />
              </div>
            ))}
          </ScrollToBottom>
        </div>
        <div className="border-top-sub-light mb-2" />
      </div>
    </div>
  );
};

ChatBox.propTypes = {
  messages: PropTypes.array,
  name: PropTypes.string,
};

export default ChatBox;
