import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import ProfileBox from '../View/Profile/ProfileBox';
import ChatBox from './ChatBox';
import Input from './Input';
import { loadUser } from '../../actions/auth';
import { END_POINT_SOCKET } from '../../constant/constant';
import OpenRoom from '../Queue/OpenRoom/OpenRoom';
// for chat box display
import './chat.css';

let socket;
const TutorChatRoom = ({ location, loadUser }) => {
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  // USER JOIN THE ROOM CHAT
  useEffect(() => {
    const ENDPOINT = END_POINT_SOCKET;
    socket = io(ENDPOINT);
    const { name, room } = queryString.parse(location.search);
    setRoom(room);
    setName(name);
    socket.emit('join', { name, room }, error => {
      if (error) {
        console.log(error);
      }
    });
  }, [location.search, END_POINT_SOCKET]);

  // CHAT AND SEND
  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [messages]);

  useEffect(() => {
    loadUser();
  }, []);

  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', { message, name }, () => setMessage(''));
    }
  };
  return (
    <div className="container bg-sub fix-height">
      <div className="d-lg-flex">
        <div className="tutor-chat-room col-12 col-md-12 col-lg-8 bg-sub border-right-sub-light">
          {/* start chatbox */}
          <div className="bg-sub">
            <div>
              <ChatBox messages={messages} name={name} />
              <Input
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
              />
            </div>
          </div>
          {/* End chat box */}
        </div>
        <div className="d-flex flex-column col-12 col-md-12 col-lg-4 bg-sub border-left-sub-light px-3 py-2">
          <h2 className="lead bg-main text-light text-center py-3 mt-2 mb-1 border">
            T U T O R _ C H A T R O O M
          </h2>
          <ProfileBox />
          <div className="border-top bg-main d-flex justify-content-center pt-2">
            <p className="lead text-center text-light">Go to Profile:</p>
            <Link to="/profile">
              <button
                className="btn bg-danger rounded-0 ml-2 px-4"
                type="button"
              >
                {' '}
                &nbsp;
                <i className="fas fa-user text-light" />
              </button>
            </Link>
          </div>
          <OpenRoom />
        </div>
      </div>
    </div>
  );
};

TutorChatRoom.propTypes = {
  location: PropTypes.object,
  loadUser: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  createRoomSuccess: state.tutorRoom.createRoomSuccess,
});

export default connect(mapStateToProps, {
  loadUser,
})(TutorChatRoom);
