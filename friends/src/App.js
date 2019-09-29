import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import FriendsList from "./Components/FriendsList";
import AddFriend from "./Components/AddFriend";
import Friend from "./Components/Friend";
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App-Friend">
          <Route exact path="/" component={FriendsList} />
          <Route path="/addfriend" component={AddFriend} />
          <Route path="friends/:id" component={Friend} />
        </div>
      </Switch>
    );
  }
}

// export default App;