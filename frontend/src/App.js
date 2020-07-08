import React, { useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import { connect } from 'react-redux';

import Header from './Components/Header';
import Footer from './Components/Footer';

import { initAccount } from './Actions/AccountActions';



function App({ initAccount }) {
  useEffect(() => {
    initAccount();
  }, [initAccount]);
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

const mapsStateToProps = (state) => {
  return {
    account: state.account.account
  }
}

export default connect(mapsStateToProps, { initAccount })(App);
