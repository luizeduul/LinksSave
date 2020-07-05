import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Layouts/Manage'

import './styles.css';

const links = [
  {
    key: 1,
    label: 'Instagram',
    url: 'https://instagram.com/'
  },
  {
    key: 2,
    label: 'Meu site',
    url: 'https://meusite.com.br/'
  },
  {
    key: 3,
    label: 'twitter',
    url: 'https://twitter.com/'
  },
  {
    key: 4,
    label: 'Facebook',
    url: 'https://facebook.com/'
  },

]

export default function Links() {
  return (
    <Layout>
      <div className="links-container">
        <div className="links-content">
          <h2>Links</h2>
          <Link to="/manage/links/create" className="button-add">
            Add
          </Link>
        </div>
        {links.map(link => (
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
        ))}
      </div>
    </Layout>
  );
}

