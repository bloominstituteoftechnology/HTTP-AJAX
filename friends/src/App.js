import React from 'react';
import { Route, Link } from 'react-router-dom';
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
      <div className='AppBody'>

      <Route exact path='/' render={props => <FriendsList {...props}/>}/>
      </div>
    );
  }
}

export default App;
