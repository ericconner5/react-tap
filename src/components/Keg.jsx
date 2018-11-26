import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  const kegStyles = {
    display: 'inline-block',
    width: '20%',
    margin: '1%',
    border: '1px solid lightgrey',
    borderRadius: '7%',
    padding: '1rem',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(211, 211, 211, 0.6)',
    fontFamily: 'Tahoma',
    textShadow: '0px 0px 1px grey',
  };
  return (
    <div style={kegStyles}>
      <h2>{props.brewery} - {props.brew}</h2>
      <h4>Style: {props.style}</h4>
      <h4>ABV: {props.abv}</h4> 
      <h4>IBU: {props.ibu}</h4>
      <h4>${props.price}</h4>
      <h4>Pints Remaining: {props.pintCount}</h4>
      <h4>From: {props.region}</h4>
    </div>
  );
}

Keg.propTypes = {
  brewery: PropTypes.string.isRequired,
  brew: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintCount: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
};

export default Keg;
