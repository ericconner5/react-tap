import React from 'react';
import PropTypes from 'prop-types';
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
          placeholder='Brewery Name'/>
        <input
          type='text'
          id='brew'
          placeholder='Brew'/>
        <input
          type='text'
          id='style'
          placeholder='Beer style'/>
        <input
          type='text'
          id='abv'
          placeholder='ABV %'/>
        <input
          type='text'
          id='ibu'
          placeholder='IBU'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='pintCount'
          placeholder='Pint Count'/>
        <input
          type='text'
          id='region'
          placeholder='Region'/>
        <button type='submit'>Add New Keg</button>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;
