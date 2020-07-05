import React from 'react';
import { connect } from 'react-redux';

import { signIn } from './SignInActions'

import './styles.css';

function SignIn({ account, signIn }) {


  function handleSubmit(event) {
    event.preventDefault();

    signIn({ email: 'ledulz@gmail.com', password: '123456'});
  }

  console.log("**** SignIn.account", account);

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
    account: state.signIn.account
  }
}

export default connect(mapStateToProps, { signIn })(SignIn);