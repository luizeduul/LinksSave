import React from 'react';

import './styles.css';


export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <div>
            <span>Voltar</span>
          </div>
          <div>
            <strong>Links</strong>
          </div>
          <div>
            <span>Sair</span>
          </div>
        </div>
      </nav>
      <div className="content-child">{children}</div>
    </div>
  );
}

