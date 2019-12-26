import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { END_POINT_SOCKET } from '../../constant/constant';
import TutorCard from '../Queue/TutorCard';
import Spinner from '../../layout/Spinner';
import { loadRoom } from '../../actions/tutorRoom';

let socket;
const PickTutor = ({ roomLists, loading, loadRoom }) => {
  // init Socket.io
  const ENDPOINT = END_POINT_SOCKET;
  socket = io(ENDPOINT);

  const [tutorRoomLists, setTutorRoomLists] = useState([]);

  useEffect(() => {
    setTutorRoomLists(roomLists);
  }, [loading, loadRoom, tutorRoomLists, roomLists]);

  // Load room List frist time
  useEffect(() => {
    loadRoom();
    setTutorRoomLists(roomLists);
  }, [loadRoom, loading]);

  useEffect(() => {
    socket.on('chatRoomHasBeenOpened', () => {
      console.log('TUTOR OPEN THE ROOM, UPDATE PAGE');
      loadRoom();
    });
    socket.on('TutorHasBeenSelected', () => {
      loadRoom();
    });
    socket.on('chatRoomHasBeenClosed', () => {
      loadRoom();
    });
    socket.on('studentHasLeftTheRoom', () => {
      loadRoom();
    });
    loadRoom();
  }, [loading]);
  return <div>{buidViewTutorRoom(tutorRoomLists)}</div>;
};

const buidViewTutorRoom = listRoom => {
  let view;
  console.log(listRoom);
  if (listRoom === undefined || listRoom === null) {
    view = <Spinner />;
  } else {
    view = (
      <div className="picktutor container d-flex bg-sub pb-4 pt-4">
        <div className="queue col-12 bg-sub pt-0 px-3 pb-3">
          <div className="lead bg-main text-center py-4 text-light">
            A v a i l a b l e &nbsp;&nbsp; T u t o r
          </div>
          <ul className="list-group p-0">
            <li className="list-group-item p-0 border-top-0 border-color-sub">
              {listRoom.map(tutor => (
                <TutorCard
                  key={tutor._id}
                  id={tutor._id}
                  name={tutor.name}
                  avatar={tutor.avatar}
                  like={tutor.like}
                  room={tutor.room}
                />
              ))}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return view;
};

PickTutor.propTypes = {
  loadRoom: PropTypes.func,
  loading: PropTypes.bool,
  roomLists: PropTypes.array,
};
const mapStateToProps = state => ({
  roomLists: state.tutorRoom.tutorRoomLists,
  loading: state.tutorRoom.loading,
});

export default connect(mapStateToProps, { loadRoom })(PickTutor);
