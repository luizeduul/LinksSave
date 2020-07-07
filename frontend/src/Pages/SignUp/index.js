import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from './SignUpActions'

import './styles.css';

function SignUp({ signUp, account }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("signup submit*******", data);

    signUp(data);
  };

  if(account){
    return <Redirect to="/manage/links" />
  }

  return (
    <div className="signup-container">
      <h2>Cadastre-se</h2>
      <div className="signup-content">
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
            <button className="button-signup">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    account: state.signUp.account
  }
}

export default connect(mapStateToProps, { signUp })(SignUp);