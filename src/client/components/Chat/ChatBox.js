import React from 'react';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';
import './chat.css';

const ChatBox = () => {
  return (
    <div>
      <div className="bg-sub pt-4 pb-4 pr-3 pl-3">
        <div className="chat">
          <ReceivedMessage />
          <SentMessage />
          <ReceivedMessage />
          <SentMessage />
          <SentMessage />
          <ReceivedMessage />
          <ReceivedMessage />
          <SentMessage />
          <ReceivedMessage />
        </div>
        <div className="border-top-sub-light mb-4" />

        <div className="chat-area input-group">
          <textarea
            className="pl-3 form-control rounded-0"
            placeholder="Type your message"
          />
          <button className="btn bg-main rounded-0" type="button">
            <i className="far fa-paper-plane text-light" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
