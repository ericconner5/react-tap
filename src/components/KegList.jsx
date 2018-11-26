import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  console.log(props.kegList);
  return (
    <div id="keg-list">
      {props.kegList.map((keg) => {
        return (
          <Keg brewery={keg.brewery}
            brew={keg.brew}
            style={keg.style}
            abv={keg.abv}
            ibu={keg.ibu}
            price={keg.price}
            pintCount={keg.pintCount}
            region={keg.region}
            key={keg.id}/>
        );
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  // currentRouterPath: PropTypes.string,

};

export default KegList;
