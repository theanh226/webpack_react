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

        <div className="input_msg">
          <input type="text" className="pl-3" placeholder="Type your message" />
          <button className="btn bg-main" type="button">
            <i className="far fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
