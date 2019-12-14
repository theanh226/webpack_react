import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth');
    console.log(res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/auth',
      body,
      config,
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const { errors } = err.response.data;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
// Register User
export const register = ({ name, email, password, code }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password, code });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/users',
      body,
      config,
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Sign Up Success', 'success'));
    dispatch(loadUser());
  } catch (err) {
    const { errors } = err.response.data;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => async dispatch => {
  await axios.post('http://localhost:5000/api/auth/offline');
  dispatch({ type: LOGOUT });
};
