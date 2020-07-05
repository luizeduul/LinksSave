import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../../Layouts/Manage';

import './styles.css';


export default function Edit() {
  return (
    <Layout>
      <div className="signin-container">
        <h2>Editar Link</h2>
        <div className="signin-content">
          <form>
            <div className="form-group">
              <label>Label</label>
              <input
                className="input-email"
                type="text"
                name="text"
                id="email"
                required
              />
            </div>
            <div className="form-group">
              <label>Url</label>
              <input
                className="input-password"
                type="text"
                name="url"
                id="url"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" name="isSocial"/>
                <span></span>
                Rede social?
              </label>
            </div>
            <div>
              <button className="button-login">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

