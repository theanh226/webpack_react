import {
  LOAD_ROOM,
  LOAD_ROOM_FAIL,
  TUTOR_CREATE_ROOM,
  TUTOR_CREATE_ROOM_FAIL,
  TUTOR_CLOSE_ROOM,
  TUTOR_CLOSE_ROOM_FAIL,
} from '../actions/types';

const initaleState = {
  tutorRoomLists: null,
  loading: true,
};

export default function(state = initaleState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ROOM:
    case TUTOR_CREATE_ROOM:
    case TUTOR_CLOSE_ROOM:
      return {
        ...state,
        tutorRoomLists: payload,
        loading: false,
      };
    case LOAD_ROOM_FAIL:
    case TUTOR_CREATE_ROOM_FAIL:
    case TUTOR_CLOSE_ROOM_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
