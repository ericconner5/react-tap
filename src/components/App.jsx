import React from 'react';
import KegList from './KegList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKeg} />
        <Route path='/editkeg' component={EditKeg} />
      </Switch>
    </div>
  );
}

export default App;
