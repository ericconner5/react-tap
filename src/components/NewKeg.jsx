import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function NewKeg(){
  return(
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Your Location'/>
        <textarea
          id='issue'
          placeholder='Describish That Ish-ish.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKeg;
