/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './chat.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form chat-area input-group pb-3 pt-4 border-top-sub-light">
    <textarea
      className="pl-3 form-control rounded-0"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
    />
    <button
      className="btn bg-main rounded-0"
      type="button"
      onClick={e => sendMessage(e)}
    >
      <i className="far fa-paper-plane text-light" />
    </button>
  </form>
);
Input.propTypes = {
  setMessage: PropTypes.func,
  sendMessage: PropTypes.func,
  message: PropTypes.string,
};

export default Input;
