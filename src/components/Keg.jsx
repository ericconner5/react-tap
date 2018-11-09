import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h2>{props.brewery} - {props.brew}</h2>
      <h4>Style: {props.style}</h4>
      <h4>ABV: {props.abv} - IBU: {props.ibu}</h4>
      <h4>{props.price}</h4>
      <h4>Pints Remaining: {props.pintCount}</h4>
      <h4>From: {props.region}</h4>
      <hr/>
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
