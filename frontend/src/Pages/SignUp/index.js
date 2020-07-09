import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from '../../Actions/AccountActions';
import { getFormData } from '../../Helpers/form';

import '../commonStyles.css';

function SignUp({ signUp, account }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = getFormData(event);
    signUp(data);
  };

  if(account){
    return <Redirect to="/manage/links" />
  }

  return (
    <div className="sign-container">
      <h2>Cadastre-se</h2>
      <div className="sign-content">
        <form method="Post" onSubmit={handleSubmit}>
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
          <div className="form-group">
            <label>Repita a Senha</label>
            <input
              className="input-password"
              type="password"
              name="password_confirmation"
              id="password-confirmation"
              required
            />
          </div>
          <div>
            <button className="button-sign">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account
  }
}

export default connect(mapStateToProps, { signUp })(SignUp);