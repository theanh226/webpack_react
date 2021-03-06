import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

// eslint-disable-next-line no-shadow
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className="container fix-height text-light col-lg-4 col-md-6 col-sm-7 col-12 pt-5">
      <div className="p-4">
        <h2 className="color-pale-green text-light">Sign In</h2>
        <p className="lead">
          <i className="fas fa-user color-pale-green text-light mr-2" /> Sign
          Into Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>
          <input
            type="submit"
            className="btn bg-main btn-lg text-light"
            value="Login"
          />
        </form>
        <p className="my-1 text-light d-flex">
          Do not have an account?{' '}
          <Link to="/register">
            <p className="text-warning ml-2">Sign Up</p>
          </Link>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
