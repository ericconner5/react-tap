import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <style jsx> {`
          div {

            padding: .2rem;
            min-height: 17vh;
            background-color: rgba(211, 211, 211, 0.6);
            border-radius: 1%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            width: 70%;
            text-shadow: 0px 0px 4px grey;
            font-size: 150%;
            font-family: Tahoma;
            color: #463829;
            text-decoration: none;
            justify-content: space-between;
          }`}</style>
      <h1>Shady's Kegs</h1>
      <Link to="/" style={{ textDecoration: 'none', padding: '4vw' }}>Shady's Home</Link>
      <Link to="/newkeg" style={{ textDecoration: 'none', padding: '4vw' }}>Add Keg</Link>
      <Link to="/editkeg" style={{ textDecoration: 'none', padding: '4vw' }}>Edit Keg</Link>
    </div>
  );
}

Header.propTypes = {
  header: PropTypes.object
};

export default Header;
