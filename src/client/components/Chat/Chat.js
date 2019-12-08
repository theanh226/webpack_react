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

// import CodeMirrorCom from './CodeMirrorCom';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [code, setCode] = useState('');
  const [sendCode, setSendCode] = useState(false);

  useEffect(() => {
    console.log('emit sendCode');
    socket.emit('sendCode', { code }, error => {
      if (error) {
        console.log(error);
      }
    });

    socket.on('showCode', data => {
      console.log('showCode building in client');
      console.log('Data reviced from Server', data.codeStudent);
      setCode(data.codeStudent);
    });
    // return () => {};
  }, [sendCode]);

  // const onChange = e => setCode({ [e.target.name]: e.target.value });

  // const onSubmit = e => {
  //   e.preventDefault();
  //   setSendCode(!sendCode);
  // };

  return (
    <div className="mb-5">
      <h2 className="text-center mb-2 mt-2">Chat Component</h2>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'monokai',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
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
      {/* <div>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="input your code here"
              name="company"
              value={code}
              onChange={e => onChange(e)}
            />
          </div>
        </form>
      </div> */}
    </div>
  );
};

// Chat.propTypes = {};

export default Chat;
