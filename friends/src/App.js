import React, { Component } from 'react';
import {Route} from "react-router-dom";
import DisplayFriends from "./Components/DisplayFriends"
import FriendsList from "./Components/FriendsList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DisplayFriends} />
        <Route path="/friends/:id"
          render={(props) => <FriendsList {...props}/>}
        />
      </div>
    );
  }
}

export default App;
