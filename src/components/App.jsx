import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import KegList from './KegList';
import NewKeg from './NewKeg'; /*should go in keglist?*/
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
    const newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {

    //   // background: 'linear-gradient(#c1d2d6, #aebbc7, #6a7d8e)',

    return (
      <div className='app-container'>
        <style jsx global>{`
            html {
              background-image: url(${kegWalkIn});
              margin: none;
              font-family: Tahoma;
              color: #463829;
              height: 100%;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              background-color: rgba(211, 211, 211, 0.8);

            }


                  `}</style>
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
