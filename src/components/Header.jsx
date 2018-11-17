import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <style jsx> {`
          div {
            padding: 1rem;
            min-height: 17vh;
            /* background: linear-gradient(#e3dcc0, #d2be96, #ab9c73);*/
            background-color: rgba(111, 111, 111, 0.6);
            border-radius: 7%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            text-shadow: 0px 0px 4px white;
            color: #6a7d8e;
            font-size: 150%;
          }`}</style>
      <h1>Shady's Kegs</h1>
      <Link to="/">Shady's Home</Link> |
      <Link to="/newkeg">Shady's Add Keg</Link> |
      <Link to="/editkeg">Shady's Edit Keg</Link>
    </div>
  );
}

Header.propTypes = {
  header: PropTypes.object
};

export default Header;
