import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    code: '',
  });
  const [goToLogin, setGoToLogin] = useState(false);
  const { name, email, password, password2, code } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
      setGoToLogin(!goToLogin);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/test" />;
  }
  if (goToLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="p-4">
      <h2 className="color-pale-green">Sign Up</h2>
      <p className="lead">
        <i className="fas fa-user color-pale-green" /> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Code"
            name="code"
            value={code}
            onChange={e => onChange(e)}
          />
          <small className="form-text text-danger">
            If you are a student you can skip this field
          </small>
        </div>
        <input
          type="submit"
          className="btn bg-pale-green text-light"
          value="Register"
        />
      </form>
      <p className="my-1 text-light">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
