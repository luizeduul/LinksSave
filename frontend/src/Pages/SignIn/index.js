import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getFormData } from '../../Helpers/form';
import { signIn } from '../../Actions/AccountActions'

import '../commonStyles.css';

function SignIn({ account, signIn }) {

  if(account){
    return <Redirect to="/manage/links" />
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = getFormData(event);
    signIn(data);
  }

  return (
    <div className="sign-container">
      <h2>Login</h2>
      <div className="sign-content">
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
            <button className="button-sign">Login</button>
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