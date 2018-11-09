import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import Body from './Body';


function App(){
  return (
    <div>
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
