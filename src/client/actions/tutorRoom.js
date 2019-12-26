import axios from 'axios';
import {
  LOAD_ROOM,
  LOAD_ROOM_FAIL,
  STUDENT_JOIN_ROOM,
  STUDENT_JOIN_ROOM_FAIL,
  TUTOR_CREATE_ROOM,
  TUTOR_CREATE_ROOM_FAIL,
  TUTOR_CLOSE_ROOM,
  TUTOR_CLOSE_ROOM_FAIL,
  STUDENT_LEAVE_ROOM,
  STUDENT_LEAVE_ROOM_FAIL,
  STUDENT_IN_ROOM,
} from './types';
import { SERVER_BACKEND } from '../constant/constant';
import { setAlert } from './alert';
import { leaveQueueStudent } from './queue';

// load Room
export const loadRoom = () => async dispatch => {
  try {
    const res = await axios.get(`${SERVER_BACKEND}/api/room`);
    dispatch({
      type: LOAD_ROOM,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_ROOM_FAIL,
    });
    dispatch(setAlert('Load Room Failed', 'danger'));
  }
};

// student join chat room
export const joinChat = id => async dispatch => {
  // eslint-disable-next-line no-alert
  if (window.confirm('Join this room?')) {
    try {
      await axios.post(`${SERVER_BACKEND}/api/room/in-chat/${id}`);
      dispatch({
        type: STUDENT_JOIN_ROOM,
      });
      dispatch(loadRoom());
      dispatch(studentInChat());
      dispatch(leaveQueueStudent());
    } catch (error) {
      dispatch({
        type: STUDENT_JOIN_ROOM_FAIL,
      });
      dispatch(setAlert('Join Room failed', 'danger'));
    }
  }
};

// Student in Room Chat
export const studentInChat = () => async dispatch => {
  try {
    dispatch({
      type: STUDENT_IN_ROOM,
    });
  } catch (error) {
    console.log(error);
  }
};

// tutor close room
export const closeRoom = () => async dispatch => {
  try {
    await axios.post(`${SERVER_BACKEND}/api/room/close`);
    dispatch({
      type: TUTOR_CLOSE_ROOM,
    });
    dispatch(loadRoom());
    dispatch(setAlert('You have successfully closed the room', 'success'));
  } catch (error) {
    dispatch({
      type: TUTOR_CLOSE_ROOM_FAIL,
    });
    dispatch(setAlert('close room failed', 'danger'));
  }
};

// tutor close room
export const studentLeaveChat = roomNumber => async dispatch => {
  try {
    await axios.post(`${SERVER_BACKEND}/api/room/on/${roomNumber}`);
    dispatch({
      type: STUDENT_LEAVE_ROOM,
    });
    dispatch(loadRoom());
    dispatch(setAlert('You have left the room', 'success'));
  } catch (error) {
    dispatch({
      type: STUDENT_LEAVE_ROOM_FAIL,
    });
    dispatch(setAlert('Leaving the room failed', 'danger'));
  }
};

// tutor create Room
export const createRoomChat = room => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ room });

  try {
    await axios.post(`${SERVER_BACKEND}/api/room/open`, body, config);
    dispatch({
      type: TUTOR_CREATE_ROOM,
    });
    dispatch(loadRoom());
    dispatch(setAlert('Create Room Success', 'success'));
  } catch (error) {
    const { errors } = error.response.data;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    console.log(error);
    dispatch({
      type: TUTOR_CREATE_ROOM_FAIL,
    });
    dispatch(setAlert('Create Room Failed', 'danger'));
  }
};
