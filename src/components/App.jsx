import React from 'react';
import KegList from './KegList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewKeg from './NewKeg';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKeg} />
      </Switch>
    </div>
  );
}

export default App;
