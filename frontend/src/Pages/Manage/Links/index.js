import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from '../../Layouts/Manage';
import { linkList } from '../../../Actions/LinkActions';

import './styles.css';

function Links({ links, linkList }) {
  useEffect(() => {
    linkList();
  }, [linkList]);

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
          ? links.map(link => (
            <div className="links-section" key={link.key}>
              <div className="img">
                <img src="https://placehold.it/100x100?text=SEM%20TITULO" alt="link icon" />
              </div>
              <div className="links group-labels">
                <span>{link.label}</span>
                <span>{link.url}</span>
              </div>
              <div className="links buttonActions">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          ))
          : null
        }
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    links: state.link.links
  };
}

export default connect(mapStateToProps, { linkList })(Links)