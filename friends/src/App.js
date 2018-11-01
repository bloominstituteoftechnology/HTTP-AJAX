import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FriendsList from './components/friendly/FriendsList.js';


class App extends React.Component {
  constructor() {
    super();
    this.state={
      something:[]
    };
  }


  render() {
    return (
      <Route exact path='/' render={props => <FriendsList {...props}/>}/>
    );
  }
}

export default App;
