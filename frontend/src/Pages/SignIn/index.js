import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signIn } from '../../Actions/AccountActions'

import './styles.css';

function SignIn({ account, signIn }) {

  if(account){
    return <Redirect to="/manage/links" />
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    signIn(data);
  }

  return (
    <div className="signin-container">
      <h2>Login</h2>
      <div className="signin-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="input-email"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              className="input-password"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div>
            <button className="button-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account
  };
}

export default connect(mapStateToProps, { signIn })(SignIn);