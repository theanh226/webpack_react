import {
  LOAD_ROOM,
  LOAD_ROOM_FAIL,
  TUTOR_CREATE_ROOM,
  TUTOR_CREATE_ROOM_FAIL,
  TUTOR_CLOSE_ROOM,
  TUTOR_CLOSE_ROOM_FAIL,
  STUDENT_LEAVE_ROOM,
  STUDENT_LEAVE_ROOM_FAIL,
  STUDENT_JOIN_ROOM,
  STUDENT_IN_ROOM,
  STUDENT_JOIN_ROOM_FAIL,
} from '../actions/types';

const initaleState = {
  tutorRoomLists: null,
  loading: true,
  createRoomSuccess: false,
  studentJoinRoom: false,
  tutorCloseRoom: false,
};

export default function(state = initaleState, action) {
  const { type, payload } = action;
  switch (type) {
    case TUTOR_CREATE_ROOM:
      return {
        ...state,
        createRoomSuccess: true,
        loading: false,
      };
    case STUDENT_JOIN_ROOM:
      return {
        ...state,
        studentJoinRoom: true,
        loading: false,
      };
    case STUDENT_IN_ROOM:
      return {
        ...state,
        studentJoinRoom: false,
        loading: false,
      };
    case LOAD_ROOM:
      return {
        ...state,
        tutorRoomLists: payload,
        loading: false,
      };
    case STUDENT_LEAVE_ROOM:
      return {
        ...state,
        tutorRoomLists: payload,
        loading: false,
        createRoomSuccess: false,
      };
    case LOAD_ROOM_FAIL:
    case TUTOR_CREATE_ROOM_FAIL:
    case TUTOR_CLOSE_ROOM_FAIL:
    case STUDENT_LEAVE_ROOM_FAIL:
    case STUDENT_JOIN_ROOM_FAIL:
      return {
        ...state,
        loading: false,
      };
    case TUTOR_CLOSE_ROOM:
      return {
        ...state,
        loading: false,
        createRoomSuccess: false,
        tutorCloseRoom: true,
        tutorRoomLists: payload,
      };
    default:
      return state;
  }
}
