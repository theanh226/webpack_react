import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { joinChat, loadRoom } from '../../actions/tutorRoom';
import { END_POINT_SOCKET } from '../../constant/constant';

let socket;
const TutorCard = ({
  id,
  name,
  avatar,
  like,
  room,
  joinChat,
  loadRoom,
  user,
}) => {
  const [infos, setInfos] = useState({
    idTutor: '123456789',
    nameTutor: 'DummyUser',
    avatarTutor: 'https://dummyimage.com/400x400/000/fff',
    likeTutor: 0,
    roomNumber: -1,
  });
  const [studentInfo, setStudentInfo] = useState({
    nameStudent: 'Dummy Name',
    emailStudent: 'abc@gmail.com',
  });

  const { idTutor, nameTutor, avatarTutor, likeTutor, roomNumber } = infos;
  const { nameStudent, emailStudent } = studentInfo;

  useEffect(() => {
    // init Socket.io
    const ENDPOINT = END_POINT_SOCKET;
    socket = io(ENDPOINT);
    if (id != null && name != null && room != null) {
      setInfos({
        idTutor: id,
        nameTutor: name,
        avatarTutor: avatar,
        likeTutor: like,
        roomNumber: room,
      });
    }
    setStudentInfo({
      nameStudent: user != null ? user.name : 'Thomas',
      emailStudent: user != null ? user.email : 'abc@gmail.com',
    });
  }, [id, name, room, END_POINT_SOCKET]);

  const studentJoinChat = tutorID => {
    joinChat(tutorID);
    socket.emit('studentLeaveQueue');
    loadRoom();
  };
  return (
    <div>
      <div className="row bg-main justify-content-start border-bottom-sub-light">
        <div className="col-8 py-2">
          <div className=" d-flex justify-content-start bg-main align-items-center ml-3 p-2">
            <div>
              <img
                src={avatarTutor}
                alt=""
                width="80"
                height="80"
                className="rounded-circle mr-2"
              />
            </div>
            <div className="text-light ml-4  text-truncate">
              <p className="lead mb-0">{nameTutor}</p>
              <div>
                <div className="d-flex justify-content-start">
                  <div className="font-weight-light font-italic ">
                    <p className="lead mb-0">Like: &nbsp;{likeTutor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end p-0 bg-main pt-2">
          <Link
            onClick={() => studentJoinChat(idTutor)}
            to={`/chat?name=${nameStudent}&room=${roomNumber}&email=${emailStudent}`}
          >
            <button
              className="btn h-50 btn-success rounded-0 mt-4 ml-4 px-3 pb-4"
              type="button"
            >
              <p className="lead mb-0">Join Room</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

TutorCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  like: PropTypes.number,
  room: PropTypes.number,
  loadRoom: PropTypes.func,
  joinChat: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  roomLists: state.tutorRoom.tutorRoomLists,
  loading: state.tutorRoom.loading,
});

export default connect(mapStateToProps, { loadRoom, joinChat })(TutorCard);
