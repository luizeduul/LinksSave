import React from 'react';

import './styles.css';

export default function SignUp() {
  return (
    <div className="container">
      <h2>Cadastre-se</h2>
      <div className="content">
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
          <div className="form-group">
            <label>Repita a Senha</label>
            <input 
              className="input-password" 
              type="password" 
              name="password-confirmation" 
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