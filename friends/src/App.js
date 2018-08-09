import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendList from './components/FriendList';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Route exact path="/" component={FriendList}/>
          <Route path="/add_friend" component={Form}/>
        </div>
      </div>
      );
  }
}

export default App;
