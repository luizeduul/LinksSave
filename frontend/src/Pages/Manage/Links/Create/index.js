import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFormData } from '../../../../Helpers/form';
import { linkCreate } from '../../../../Actions/LinkActions'
import Layout from '../../../Layouts/Manage';

import './styles.css';

function Create({ link, linkCreate }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = getFormData(event);
    linkCreate(data);
  }

  if(link){
    return <Redirect to="/manage/links" />
  }
  console.log("****link ", link)
  return (
    <Layout>
      <div className="signin-container">
        <h2>Cadastrar Link</h2>
        <div className="signin-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Label</label>
              <input
                className="input-email"
                type="text"
                name="label"
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
                <input type="checkbox" name="isSocial" />
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

const mapStateToProps = (state) => {
  return {
    link: state.link.link
  };
}

export default connect(mapStateToProps, { linkCreate })(Create);
