import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Friends from './component/Friends.js'; 
import FriendsList from './component/FriendsList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = friend => {
    const savedList = this.state.savedList;
    savedList.push(friend);
    this.setState({ savedList });
  };

  render() {
    return (
     <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" component={FriendsList} />
          <Route path="/friends/:id" render={props =>  (<Friends {...props} addToSavedList={this.addToSavedList} />)} />
        </div>
      </div>
    );
  }
}

export default App;
