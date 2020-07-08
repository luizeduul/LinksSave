import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTokenExpire } from '../../Helpers/jwt';
import { secondsToReadableTime } from '../../Helpers/dateTime';
import { getToken } from '../../Helpers/account';
import { getFreshToken } from '../../Actions/AccountActions';


function TokenRefresher({ getFreshToken }) {

  const TRASHOLD = 30;

  function calculate() {
    const token = getToken();
    const expires = getTokenExpire(token)

    const secondsToExpire = expires - (Date.now() / 1000);
    //const readableTime = secondsToReadableTime(secondsToExpire);
    return secondsToExpire;
  }

  useEffect(() => {
    getFreshToken();
    const secondsToExpire = calculate() - TRASHOLD;
    const id = setTimeout(getFreshToken, secondsToExpire * 1000);
    
    return () => clearTimeout(id);
  }, [getFreshToken])

  setInterval(calculate, 1000);

  return (
    null
  );
}

const mapsStateToProps = (state) => {
  return {}
}
export default connect(mapsStateToProps, { getFreshToken })(TokenRefresher)

