import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import PropTypes from 'prop-types';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    code: '',
  });
  const { name, email, password, password2, code } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password do not match');
      // setAlert('Passwords do not match', 'danger');
    } else {
      // register({ name, email, password });
      console.log('MATCH');
      const newUser = {
        name,
        email,
        password,
        code,
      };
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const body = JSON.stringify(newUser);
        const res = await axios.post(
          'http://localhost:5000/api/users',
          body,
          config,
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };
  return (
    <div className="mb-4 mt-4">
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
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

// Register.propTypes = {};

export default Register;
