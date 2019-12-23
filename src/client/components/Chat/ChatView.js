import React, { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { connect } from 'react-redux';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChatBox from './ChatBox';
import Queue from '../Queue/Queue';
import ProfileBox from '../View/Profile/ProfileBox';
import InfoBox from '../View/Profile/InfoBox';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/python/python';
import { closeRoom, studentLeaveChat } from '../../actions/tutorRoom';
import { loadUser } from '../../actions/auth';
import { END_POINT_SOCKET } from '../../constant/constant';
import Input from './Input';

let socket;
const ChatView = ({
  user,
  closeRoom,
  studentLeaveChat,
  location,
  createRoomSuccess,
  loadUser,
}) => {
  // init Socket.io

  const [infos, setInfos] = useState({
    type: '',
    idUser: '',
  });
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [useLeaveChat, setUseLeaveChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { type } = infos;

  // USER JOIN THE ROOM CHAT
  useEffect(() => {
    const ENDPOINT = END_POINT_SOCKET;
    socket = io(ENDPOINT);
    const { name, room, email } = queryString.parse(location.search);
    setRoom(room);
    setName(name);
    setEmailUser(email);
    setInfos({
      type: user != null ? user.type : '',
      name: user != null ? user.name : '',
    });
    socket.emit('join', { name, room, emailUser }, error => {
      if (error) {
        console.log(error);
      }
    });
  }, [location.search, END_POINT_SOCKET]);

  // CHAT AND SEND CODE
  useEffect(() => {
    socket.on('message', message => {
      // console.log(message);
      setMessages([...messages, message]);
    });

    // socket.on('codeTransaction', code => {
    //   setCodes(code);
    // });

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
  // const sendCode = event => {
  //   // event.preventDefault();
  //   console.log(event);
  //   if (code) {
  //     socket.emit('sendCode', code, () => setCode(code));
  //   }
  // };
  const leaveRoomChat = typeUser => {
    if (typeUser === 'Tutor') {
      closeRoom();
      setUseLeaveChat(!useLeaveChat);
    } else {
      studentLeaveChat(room);
      setUseLeaveChat(!useLeaveChat);
    }
  };

  if (useLeaveChat) {
    if (createRoomSuccess === false) {
      return <Redirect to="/profile" />;
    }
  }
  return (
    <div className="container">
      <div className="d-flex ">
        <div className="codemirror col-4 p-3 bg-sub border-right-sub-light">
          <h2 className="lead bg-main text-light text-center py-4">
            C O D E _ S N I P P E T
          </h2>
          <CodeMirror
            // value={code}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
            }}
            // onBeforeChange={(editor, data, value) => {
            //   console.log(editor);
            //     setCode(value);
            // }}
            // onChange={(editor, data, value) => {}}
          />
          <button
            className="btn bg-main text-light rounded-0 mt-4 w-100 pt-4 pb-4"
            type="submit"
            // onClick={() => setSendCode(!sendCode)}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Submit Code
          </button>
          {/* --------------- Modal Submit code --------------- */}
          {/* --------------- End-Modal Submit code --------------- */}
        </div>
        <div className="col-5 p-0">
          <ChatBox messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
        <div className="chatView d-flex flex-column justify-content-between col-3 bg-sub border-left-sub-light p-3">
          {viewBox(type)}
          <div className="border-top-sub-light  text-center">
            <button
              className="btn btn-danger btn-lg rounded-0 mt-4 w-100 pt-3 pb-1"
              type="button"
              data-toggle="modal"
              data-target="#leaveRoomModal"
            >
              <p className="lead">Leave Room</p>
            </button>
          </div>
          {/* --------------- Modal Leave -----------*/}
          <div className="modal fade" id="leaveRoomModal">
            <div className="modal-dialog ">
              <div className="modal-content bg-sub">
                <div className="modal-body text-light text-center lead mt-3 mb-0">
                  Do you want to leave the room?
                </div>
                <div className="modal-footer border-0 d-flex justify-content-around">
                  <button
                    type="button"
                    className="btn bg-success text-light lead px-5 py-2"
                    data-dismiss="modal"
                    onClick={() => leaveRoomChat(type)}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="btn bg-danger text-light lead px-5 py-2"
                    data-dismiss="modal"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* --------------- Modal Leave -----------*/}
        </div>
      </div>
    </div>
  );
};

const viewBox = userType => {
  let view;
  if (userType === 'Student') {
    view = (
      <div>
        <ProfileBox />
        <InfoBox />
      </div>
    );
  } else if (userType === 'Tutor') {
    view = <Queue />;
  }
  return view;
};
ChatView.propTypes = {
  user: PropTypes.object,
  closeRoom: PropTypes.func,
  studentLeaveChat: PropTypes.func,
  location: PropTypes.object,
  createRoomSuccess: PropTypes.bool,
  loadUser: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  createRoomSuccess: state.tutorRoom.createRoomSuccess,
});

export default connect(mapStateToProps, {
  studentLeaveChat,
  closeRoom,
  loadUser,
})(ChatView);
