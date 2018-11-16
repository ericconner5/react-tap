import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import Error404 from './Error404';
import kegWalkIn from '../assets/images/keg-walk-in.jpg';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    const appStyles = {
      // background: 'linear-gradient(#c1d2d6, #aebbc7, #6a7d8e)',
      height: '100%',
      margin: 'none',
      fontFamily: 'Tahoma',
      color: '#493829',
      backgroundImage: `url(${kegWalkIn})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundColor: 'rgba(211, 211, 211, 0.8)',
    };
    return (
      <div style={appStyles}>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewKeg onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/editkeg' component={EditKeg} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
