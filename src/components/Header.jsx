import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <style jsx> {`
          div {
            margin: 0;
            padding: 1rem;
            min-height: 17vh;
            background: linear-gradient(#e3dcc0, #d2be96, #ab9c73);
          }`}</style>
      <h1>Shady's Kegs</h1>
      <Link to="/">Shady's Home</Link> |
      <Link to="/newkeg">Shady's Add Keg</Link> |
      <Link to="/editkeg">Shady's Edit Keg</Link>
    </div>
  );
}

export default Header;
