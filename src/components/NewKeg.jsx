import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function NewKeg(){
  return(
    <div>
      <form>
        <input
          type='text'
          id='newBrewery'
          placeholder='Brewery Name'/>
        <input
          type='text'
          id='brew'
          placeholder='Brew'/>
        <input
          type='text'
          id='newStyle'
          placeholder='Beer style'/>
        <input
          type='text'
          id='newAbv'
          placeholder='ABV %'/>
        <input
          type='text'
          id='newIbu'
          placeholder='IBU'/>
        <input
          type='text'
          id='newPrice'
          placeholder='Price'/>
        <input
          type='text'
          id='newPintCount'
          placeholder='Pint Count'/>
        <input
          type='text'
          id='newRegion'
          placeholder='Region'/>
        <button type='submit'>Add New Keg</button>
      </form>
    </div>
  );
}

export default NewKeg;
