import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFormData } from '../../../../Helpers/form';
import Layout from '../../../Layouts/Manage';
import FormGroup from '../../../../Components/FormGroup';
import FormCheck from '../../../../Components/FormCheck';
import { linkGet, linkUpdate } from '../../../../Actions/LinkActions';

import './styles.css';


function Edit({ link, linkGet, linkUpdate }) {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);
  }, [id, linkGet]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = getFormData(event);
    linkUpdate(id, data);
  }

  return (
    <Layout>
      <div className="signin-container">
        <h2>Editar Link</h2>
        <div className="signin-content">
          <form onSubmit={handleSubmit}>
            <FormGroup
              className="input-email"
              label="Label"
              name="label"
              data={link}
              type="text"
            />
            <FormGroup
              className="input-email"
              label="url"
              name="url"
              data={link}
              type="text"
            />
            <FormCheck label="isSocial?" name="isSocial" data={link} />
            <div>
              <button className="button-login">Salvar</button>
              <button type="button" className="button-login">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

const mapsStateToProps = (state) => {
  return {
    link: state.link.link
  };
}

export default connect(mapsStateToProps, { linkGet, linkUpdate })(Edit);

