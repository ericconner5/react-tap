import React from 'react';
import PropTypes from 'prop-types';
import kegWalkIn from '../assets/images/keg-walk-in.jpg';

function Body(props){
  return (
    <div>
      <style jsx> {`
        // #kegImage {
        //   max-width: 50%;
        // }

        body {
          background-image: url('../assets/images/keg-walk-in.jpg');
          background-repeat: no-repeat;
          background-position: center;
          max-width: 100px;
          background-size: inherit;
          max-width: 100%;


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
