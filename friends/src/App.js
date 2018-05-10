import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Friends from './Friends';
import Friend from './Friend';

class App extends Component {

  state = {
    friendData: {}
  }

  render() {
    return <div className="App">
        <Route exact path="/" render={props => <Friends {...props} updateFriend={this.getFriendData}/>} />
        <Route path="/friends/:id" render={props => <Friend {...props} friendData={this.state.friendData} />} />
      </div>;
  }

  getFriendData = data => {
    this.setState({friendData: data})
  }


  //we created this func to receive data from friends.js, update app.js with that data, then when 
  //route /friends/id gets called we pass that data to friend component
}

export default App;
