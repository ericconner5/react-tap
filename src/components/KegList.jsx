import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

// const masterKegList = [
//   {
//     brewery: 'Upright',
//     brew: 'Bioacoustic Blend',
//     style: 'Belgian Farmhouse',
//     abv: '7.5%',
//     ibu: '40',
//     price: '$9',
//     pintCount: '64',
//     region: 'Portland, OR'
//   },
//   {
//     brewery: 'Lompoc',
//     brew: 'Old Tavern Rat',
//     style: 'Barleywine',
//     abv: '9.7%',
//     ibu: 'NA',
//     price: '$7',
//     pintCount: '128',
//     region: 'Portland, OR'
//   },
//   {
//     brewery: 'Fantom',
//     brew: 'Hiver',
//     style: 'Belgian Saison',
//     abv: '8%',
//     ibu: 'NA',
//     price: '$13',
//     pintCount: '32',
//     region: 'Soy-Erezee, Belgium'
//   },
// ];

function KegList(props){
  return (
    <div id="keg-list">
      {props.kegList.map((keg, index) => {
        return (
          <Keg brewery={keg.brewery}
            brew={keg.brew}
            style={keg.style}
            abv={keg.abv}
            ibu={keg.ibu}
            price={keg.price}
            pintCount={keg.pintCount}
            region={keg.region}
            key={index}/>
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
