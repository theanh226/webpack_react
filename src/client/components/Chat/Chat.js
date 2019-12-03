import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/python/python';
import './chat.css';

const Room = require('./../../../backend/DummyData');

const socket = io('http://localhost:5000');

const Chat = () => {
  const [code, setCode] = useState(Room.code);
  console.log(Room);
  const [sendCode, setSendCode] = useState(false);
  useEffect(() => {
    console.log('emit sendCode');
    socket.emit('sendCode', code, error => {
      if (error) {
        console.log(error);
      }
    });
    Room.code = code;
    // return () => {};
  }, [sendCode]);
  // socket.on('showCode', data => {
  //   console.log('showCode building in client');
  //   console.log(data.codeStudent);
  //   setCode(data.codeStudent);
  // });
  return (
    <div>
      <h2 className="text-center mb-2 mt-2">Chat Component</h2>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'monokai',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          console.log(editor);
          setCode(value);
        }}
        // onChange={(editor, data, value) => {}}
      />
      <button
        className="btn btn-danger mt-2"
        type="submit"
        onClick={() => setSendCode(!sendCode)}
      >
        Submit Code
      </button>
    </div>
  );
};

// Chat.propTypes = {};

export default Chat;
