import React from 'react';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
// import Keg from './Keg'; appears to be unneccessary

function NewKeg(props){
  let _brewery = null;
  let _brew = null;
  let _style = null;
  let _abv = null;
  let _ibu = null;
  let _price = null;
  let _pintCount = null;
  let _region = null;

  function handleAddingNewKegToList(event) {
    event.preventDefault();
    props.onNewKegCreation({brewery: _brewery.value, brew: _brew.value, style: _style.value, abv: _abv.value, ibu: _ibu.value, price: _price.value, pintCount: _pintCount.value, region: _region.value});
    _brewery.value = '';
    _brew.value = '';
    _style.value = '';
    _abv.value = '';
    _ibu.value = '';
    _price.value = '';
    _pintCount.value = '';
    _region.value = '';
  }

  return(
    <div>
      <form onSubmit={handleAddingNewKegToList}>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery Name'
          ref={(input) => {_brewery = input;}}/>
        <input
          type='text'
          id='brew'
          placeholder='Brew'
          ref={(input) => {_brew = input;}}/>
        <input
          type='text'
          id='style'
          placeholder='Beer style'
          ref={(input) => {_style = input;}}/>
        <input
          type='number'
          id='abv'
          placeholder='ABV %'
          ref={(input) => {_abv = input;}}/>
        <input
          type='number'
          id='ibu'
          placeholder='IBU'
          ref={(input) => {_ibu = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='number'
          id='pintCount'
          placeholder='Pint Count'
          ref={(input) => {_pintCount = input;}}/>
        <input
          type='text'
          id='region'
          placeholder='Region'
          ref={(input) => {_region = input;}}/>
        <button type='submit'>Add New Keg</button>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  kegList: PropTypes.array,
  onNewKegCreation: PropTypes.func
};

export default NewKeg;
