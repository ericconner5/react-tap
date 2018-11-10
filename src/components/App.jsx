import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import Body from './Body';


function App(){
  const appStyles = {
    background: 'linear-gradient(#c1d2d6, #aebbc7, #6a7d8e)',
    height: '100%',
    margin: "none",
    fontFamily: 'Tahoma',
    color: '#493829',

  };
  return (
    <div style={appStyles}>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKeg} />
        <Route path='/editkeg' component={EditKeg} />
      </Switch>
      <Body/>
    </div>
  );
}

export default App;
