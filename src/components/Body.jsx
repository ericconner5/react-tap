import React from 'react';
import PropTypes from 'prop-types';
import kegWalkIn from '../assets/images/keg-walk-in.jpg';

function Body(props){
  return (
    <div>
      <style jsx> {`
        #kegImage {
          max-width: 50%;
        }



        `}
      </style>
      <div>
        <img src={kegWalkIn} id='kegImage'/>
      </div>
    </div>
  );
}

export default Body;
