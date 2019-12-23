import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ChatBox from './ChatBox';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/python/python';
import ProfileBox from '../View/Profile/ProfileBox';
import InfoBox from '../View/Profile/InfoBox';
import Queue from '../Queue/Queue';
import { loadUser } from '../../actions/auth';

const ChatView = ({ user, loadUser }) => {
  const [info, setInfo] = useState({
    type: 'A',
  });

  const { type } = info;

  useEffect(() => {
    if (user != null) {
      setInfo({
        type: user.type,
      });
    }
  }, [user]);

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="container">
      <div className="d-flex ">
        <div className="codemirror col-4 p-3 bg-sub border-right-sub-light">
          <h2 className="lead bg-main text-light text-center py-4">
            C O D E _ S N I P P E T2
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
            data-target="#submitCode"
          >
            Submit Code
          </button>
        </div>
        <div className="col-5 p-0">
          <ChatBox />
        </div>
        <div className="chatView d-flex flex-column justify-content-between col-3 bg-sub border-left-sub-light p-3">
          {viewBox(type)}
          <div className="border-top-sub-light text-center">
            <button
              className="btn btn-danger btn-lg rounded-0 mt-4 mb-2 w-100 pt-3 pb-1"
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
          {/* --------------- Modal Submit code --------------- */}
          <div className="modal fade" id="submitCode">
            <div className="modal-dialog ">
              <div className="modal-content bg-sub">
                <div className="modal-header bg-main border-bottom-sub-light text-light text-center">
                  C O D E _ B O A R D
                </div>
                <div className="modal-body text-light text-center lead mt-3 mb-0">
                  <CodeMirror
                    // value={code}
                    options={{
                      mode: 'javascript',
                      theme: 'material',
                      lineNumbers: true,
                    }}
                  />
                </div>
                <div className="modal-footer border-0 d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn bg-main text-light rounded-0 lead px-5 py-2"
                    data-dismiss="modal"
                    // onClick={() => leaveQueue(id)}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn bg-danger text-light rounded-0 lead px-5 py-2"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* --------------- End-Modal Submit code --------------- */}
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
  loadUser: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { loadUser })(ChatView);
