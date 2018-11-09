import React from 'react';
import PropTypes from 'prop-types';
import kegWalkIn from '../assets/images/keg-walk-in.jpg';

function Body(props){
  return (
    <style jsx> {`
        img {
          max-width: 25%;
        }`}</style>
        <div>
          <img src={kegWalkIn}/>
        </div>
      );
    }

    export default Body;
