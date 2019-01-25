import React, { Component } from 'react';
import { Route,Link} from "react-router-dom";
import Home from "./components/Home"

import './App.css';
import FriendList from "./components/FriendList";

class App extends Component {




    render() {
    return (
      <div className="App">
        <Link to="/friendList" >Friend List</Link>
        <Route exact path ="/friendList" component={Home}/>

      </div>
    );
  }
}

export default App;
