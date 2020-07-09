import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFormData } from '../../../../Helpers/form';
import Layout from '../../../Layouts/Manage';
import FormGroup from '../../../../Components/FormGroup';
import FormCheck from '../../../../Components/FormCheck';
import { linkGet, linkUpdate } from '../../../../Actions/LinkActions';

import '../linksCommonStyles.css';
import '../../../../global.css';

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
      <div className="link-container">
        <h2>Editar Link</h2>
        <div className="link-content">
          <form onSubmit={handleSubmit}>
            <FormGroup
              className="input-label"
              label="Descrição"
              name="label"
              data={link}
              type="text"
            />
            <FormGroup
              className="input-label"
              label="Url do site"
              name="url"
              data={link}
              type="text"
            />
            <FormCheck label="Rede Social?" name="isSocial" data={link} />
            <div className="button-actions">
              <button>Salvar</button>
              <button>
                <Link to="/manage/links" id="btnBack">Cancelar</Link>
              </button>
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

