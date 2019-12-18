import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ChatBox from './ChatBox';
import QueueCard from '../Queue/QueueCard';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/python/python';

const ChatView = () => {
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
          <ChatBox />
        </div>
        <div className="chatView col-3 bg-sub border-left-sub-light p-3">
          <div className="lead bg-main text-center py-4 text-light">
            Q u e u e
          </div>
          <ul className="list-group p-0">
            <li className="list-group-item p-0 border-top-0 border-bottom-0">
              <QueueCard />
            </li>
            <li className="list-group-item p-0 border-bottom-0 border-top-sub-light">
              <QueueCard />
            </li>
            <li className="list-group-item p-0 border-bottom-0 border-top-sub-light">
              <QueueCard />
            </li>
            <li className="list-group-item p-0 border-bottom-0 border-top-sub-light">
              <QueueCard />
            </li>
            <li className="list-group-item p-0 border-bottom-0 border-top-sub-light">
              <QueueCard />
            </li>
            <li className="list-group-item p-0 border-bottom-0 border-top-sub-light">
              <QueueCard />
            </li>
            <li className="list-group-item p-0 border-bottom-0 border-top-sub-light">
              <QueueCard />
            </li>
            <li className="list-group-item p-0 border-bottom-0 border-top-sub-light">
              <QueueCard />
            </li>
          </ul>
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
                    // onClick={() => leaveQueue(id)}
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

export default ChatView;
