import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './queue.css';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { removeStudentFromQueue } from '../../actions/queue';
import { END_POINT_SOCKET } from '../../constant/constant';

let socket;

const QueueCard = ({ id, name, status, avatar, removeStudentFromQueue }) => {
  const [infos, setInfos] = useState({
    idUser: '123456789',
    nameUSer: 'DummyUser',
    statusUser: 'In Queue',
    avatarUser: 'https://dummyimage.com/400x400/000/fff',
  });
  const { idUser, nameUSer, statusUser, avatarUser } = infos;

  useEffect(() => {
    const ENDPOINT = END_POINT_SOCKET;
    socket = io(ENDPOINT);

    if (id != null && name != null && status != null) {
      setInfos({
        idUser: id,
        nameUSer: name,
        statusUser: status,
        avatarUser: avatar,
      });
    }
  }, [id, name, status, END_POINT_SOCKET]);

  const removeStudentFromQueueBtn = id => {
    removeStudentFromQueue(id);
    socket.emit('listQueueOrListTuorChange');
  };

  return (
    <div>
      <div className="row bg-main justify-content-start">
        <div className="col-8 p-0">
          <div className=" d-flex justify-content-start bg-main align-items-center ml-3 p-2">
            <div>
              <img
                src={avatarUser}
                alt="avatar"
                width="40"
                height="40"
                className="rounded-circle mr-2"
              />
            </div>
            <div className="text-light ml-2 text-truncate">
              <p className="lead mb-0 font-small">{nameUSer}</p>
              <div>
                <div className="d-none justify-content-start">
                  <div className="font-weight-light font-italic font-small">
                    {statusUser}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end py-2 ml-2 bg-main">
          <button
            className="btn btn-danger rounded-0"
            type="button"
            onClick={() => removeStudentFromQueueBtn(idUser)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      {/* ------------- MODAL ------------- */}
      <div className="modal fade" id="removeUserFromQueue">
        <div className="modal-dialog">
          <div className="modal-content bg-sub">
            <div className="modal-body text-center lead mt-3 mb-0 text-light">
              You really want to delete this user from the queue?
            </div>
            <div className="modal-footer border-0 d-flex justify-content-around">
              <button
                type="button"
                className="btn bg-success text-light lead px-5 py-2"
                data-dismiss="modal"
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
    </div>
  );
};

QueueCard.propTypes = {
  removeStudentFromQueue: PropTypes.func,
  name: PropTypes.string,
  status: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.string,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { removeStudentFromQueue })(QueueCard);
