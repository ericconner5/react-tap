import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <div>
      <style jsx> {`
          div {
            background-color: yellow;
          }`}</style>
      <h1>Shady's Kegs</h1>
    </div>
  );
}

export default Header;
