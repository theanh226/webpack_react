import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import queue from './queue';

export default combineReducers({
  alert,
  auth,
  queue,
});
