import React from 'react';
import PropTypes from 'prop-types';
import { Keg } from './Keg';

function NewKeg(props){
  return (
    <div>
      <style jsx> {`
          div {
            background-color: yellow;
          }`}</style>
      <h1>this is the newkeg component</h1>
    </div>
  );
}

export default NewKeg;
