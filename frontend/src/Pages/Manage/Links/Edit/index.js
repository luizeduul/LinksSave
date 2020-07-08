import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../../../Layouts/Manage';
import FormGroup from '../../../../Components/FormGroup';
import FormCheck from '../../../../Components/FormCheck';
import { linkGet } from '../../../../Actions/LinkActions';

import './styles.css';


function Edit({ link, linkGet }) {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);
  }, [id, linkGet]);

  return (
    <Layout>
      <div className="signin-container">
        <h2>Editar Link</h2>
        <div className="signin-content">
          <form>
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
            <FormCheck label="isSocial?" name="isSocial" data={link}/>
            <div>
              <button className="button-login">Salvar</button>
              <button className="button-login">Cancelar</button>
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

export default connect(mapsStateToProps, { linkGet })(Edit);

