import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'

import { signOut } from '../../../Actions/AccountActions';

import './styles.css';

function Layout({ children, signOut, account }) {

  if (!account) {
    return <Redirect to="/sign-in" />
  }

  function handleSignOut(event) {
    event.preventDefault();
    signOut();
  }

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <button className="buttonExit" onClick={handleSignOut}>
            Sair <FiLogOut size={30} />
          </button>
        </div>
      </nav>
      <div className="content-child">{children}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account
  }
}

export default connect(mapStateToProps, { signOut })(Layout)

