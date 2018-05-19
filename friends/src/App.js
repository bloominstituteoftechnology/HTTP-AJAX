import React from 'react';
import Friends from '../src/components/Friends'
import UpdateFriend from './components/UpdateFriend'
import { Route } from 'react-router-dom'
import './App.css';

const App = props => {

    return (
      <div className="App">
        <Route exact path="/" component={Friends} />
        <Route path="/:friendname" component={UpdateFriend}/>
      </div>
    );
  }

export default App;
