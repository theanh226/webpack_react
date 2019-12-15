import {
  LOAD_QUEUE,
  LOAD_QUEUE_FAIL,
  // JOIN_QUEUE,
  JOIN_QUEUE_FAIL,
} from '../actions/types';

const initaleState = {
  queue: null,
  loading: true,
};

export default function(state = initaleState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_QUEUE:
      console.log(payload);
      return {
        ...state,
        queue: payload,
        loading: false,
      };
    case LOAD_QUEUE_FAIL:
    case JOIN_QUEUE_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
