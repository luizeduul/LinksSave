import React from 'react';

import './styles.css';

export default function SignIn() {
  return (
    <div className="signin-container">
      <h2>Login</h2>
      <div className="signin-content">
        <form>
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
