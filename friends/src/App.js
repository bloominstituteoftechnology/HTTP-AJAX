import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList';
import { Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
      <div className="title"> 
        <h1>The Friends List</h1> 
      </div>
      <Switch>
      <Route exact path='/' component={FriendsList} />
      </Switch>
      </div>
    );
  }
}


export default App;