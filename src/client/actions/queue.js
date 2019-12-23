/* eslint-disable no-alert */
import axios from 'axios';
import {
  LOAD_QUEUE,
  LOAD_QUEUE_FAIL,
  LEAVE_QUEUE,
  LEAVE_QUEUE_FAIL,
  JOIN_QUEUE_FAIL,
  JOIN_QUEUE,
} from './types';
import { SERVER_BACKEND } from '../constant/constant';
import { setAlert } from './alert';
import { loadUser } from './auth';

// load queue
export const loadQueue = () => async dispatch => {
  try {
    const res = await axios.get(`${SERVER_BACKEND}/api/queue`);
    dispatch({
      type: LOAD_QUEUE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_QUEUE_FAIL,
    });
    dispatch(setAlert('load queue failed', 'danger'));
  }
};

// join queue
export const joinQueue = id => async dispatch => {
  try {
    await axios.post(`${SERVER_BACKEND}/api/queue/join-queue/${id}`);
    dispatch({
      type: JOIN_QUEUE,
    });
    dispatch(loadUser());
    dispatch(loadQueue());
    dispatch(setAlert('You have been added to the queue', 'success'));
  } catch (error) {
    dispatch({
      type: JOIN_QUEUE_FAIL,
    });
    dispatch(setAlert('Join queue failed', 'danger'));
  }
};

// leave queue
export const leaveQueueStudent = () => async dispatch => {
  try {
    await axios.post(`${SERVER_BACKEND}/api/queue/leave-queue/`);
    dispatch({
      type: LEAVE_QUEUE,
      loading: true,
    });
    dispatch(loadUser());
    dispatch(loadQueue());
    dispatch(setAlert('You have left the queue', 'success'));
  } catch (error) {
    dispatch({
      type: LEAVE_QUEUE_FAIL,
    });
    dispatch(setAlert('Leave queue failed', 'danger'));
  }
};

// remove student from the queue
export const removeStudentFromQueue = id => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.post(`${SERVER_BACKEND}/api/queue/leave-queue/${id}`);
      dispatch({
        type: LEAVE_QUEUE,
        loading: true,
      });
      dispatch(loadUser());
      dispatch(loadQueue());
      dispatch(
        setAlert(
          'You have successfully removed students from the queue',
          'success',
        ),
      );
    } catch (error) {
      dispatch({
        type: LEAVE_QUEUE_FAIL,
      });
      dispatch(setAlert('Leave queue failed', 'danger'));
    }
  }
};
