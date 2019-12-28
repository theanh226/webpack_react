import React from 'react';
import { Link } from 'react-router-dom';
import ProfileBox from '../View/Profile/ProfileBox';
import ChatBox from './ChatBox';
import Input from './Input';
import OpenRoom from '../Queue/OpenRoom/OpenRoom';
// for chat box display
import ScrollToBottom from 'react-scroll-to-bottom';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';
import './chat.css';

const TutorChatRoom = () => {
  return (
    <div className="container">
      <div className="d-lg-flex">
        <div className="col-4 col-md-12 col-lg-8 p-3 bg-sub border-right-sub-light">
          <h2 className="lead bg-main text-light text-center py-4">
            T U T O R _ C H A T R O O M
          </h2>
          {/* start chatbox */}
          <div className="bg-sub pt-3 pb-4 pr-3 pl-3">
            <div>
              <ScrollToBottom className="tutor-chat-room">
                <ReceivedMessage />
                <SentMessage />
                <ReceivedMessage />
                <SentMessage />
                <SentMessage />
                <ReceivedMessage />
                <SentMessage />
                <ReceivedMessage />
                <SentMessage />
                <SentMessage />
                <ReceivedMessage />
                <ReceivedMessage />
                <SentMessage />
                <ReceivedMessage />
                <SentMessage />
                <ReceivedMessage />
                <SentMessage />
                <SentMessage />
                <ReceivedMessage />
                <SentMessage />
                <ReceivedMessage />
                <SentMessage />
                <SentMessage />
                <ReceivedMessage />
                <ReceivedMessage />
                <SentMessage />
                <ReceivedMessage />
              </ScrollToBottom>
            </div>
          </div>
          {/* End chat box */}
          <Input />
        </div>
        <div className="d-flex flex-column col-3 col-md-12 col-lg-4 bg-sub border-left-sub-light p-3">
          <ProfileBox />
          <div className="border-top bg-main d-flex justify-content-center pt-2">
            <p className="lead text-center text-light">Back to Lounge:</p>
            <Link to="/profile">
              <button
                className="btn bg-danger rounded-0 ml-2 px-4"
                type="button"
              >
                <i className="fas fa-sign-out-alt fa text-light" />
              </button>
            </Link>
          </div>
          <OpenRoom />
        </div>
      </div>
    </div>
  );
};

export default TutorChatRoom;
