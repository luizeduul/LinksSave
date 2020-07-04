import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Home() {
  return (
    <> 
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-in">SignIn</Link>
            </li>
            <li>
              <Link to="/sign-up">SignUp</Link>
            </li>
          </ul>
        </nav>
      </div> 
    </>
  );
}
