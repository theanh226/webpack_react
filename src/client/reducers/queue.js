import {
  LOAD_QUEUE,
  LOAD_QUEUE_FAIL,
  // JOIN_QUEUE,
  JOIN_QUEUE_FAIL,
  LEAVE_QUEUE,
  LEAVE_QUEUE_FAIL,
} from '../actions/types';

const initaleState = {
  queues: null,
  loading: true,
};

export default function(state = initaleState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_QUEUE:
    case LEAVE_QUEUE:
      return {
        ...state,
        queues: payload,
        loading: false,
      };
    case LOAD_QUEUE_FAIL:
    case LEAVE_QUEUE_FAIL:
    case JOIN_QUEUE_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
