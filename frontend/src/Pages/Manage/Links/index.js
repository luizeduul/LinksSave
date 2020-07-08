import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from '../../Layouts/Manage';
import { linkList, setLinkToRemove, linkRemove } from '../../../Actions/LinkActions';

import './styles.css';

function Links({ links, linkRemove, linkToRemove, linkList, setLinkToRemove }) {
  useEffect(() => {
    linkList();
  }, [linkList]);


  const confirmDelete = (event) => (linkToRemove ? linkRemove(linkToRemove) : null)

  return (
    <Layout>
      <div className="links-container">
        <div className="links-content">
          <h2>Links</h2>
          <Link to="/manage/links/create" className="button-add">
            Add
          </Link>
        </div>
        {links && links.length
          ? links.map(link => {
            //const deleteClick = (event) => setLinkToRemove(link);

            return (
              <div className="links-section" key={link.id}>
                <div className="img">
                  <img src="https://placehold.it/100x100?text=SEM%20TITULO" alt="link icon" />
                </div>
                <div className="links group-labels">
                  <span>{link.label}</span>
                  <span>{link.url}</span>
                </div>
                <div className="links buttonActions">
                  <Link to={`/manage/links/edit/${link.id}`}>
                    Edit
                </Link>
                  <button className="buttonDelete" onClick={() => {}}>
                    Delete
                </button>
                </div>
              </div>
            )
          })
          : null
        }

      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    links: state.link.links,
    linkToRemove: state.link.linkToRemove,
  };
}

export default connect(mapStateToProps, { linkList, setLinkToRemove, linkRemove })(Links)