import React, { Component } from "react";
import { Button } from 'reactstrap';
import {Route} from 'react-router-dom';

import axios from 'axios';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import FriendsList from "./components/Friends/FriendsList";
import SaveFriend from "./components/Friends/SaveFriend";
import Friend from "./components/Friends/Friend";


import './components/Nav/Nav.css'
import NavWrapper from './components/Nav/NavWrapper';
import SubNavContainer from './components/Nav/SubNavContainer';
import menuData from "./menuData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: []
    };
  }

  componentWillMount() {
    this.setState({ menu: menuData.data });
    console.log("add");
  }

  componentDidMount() {
    axios     
    .get(`http://localhost:5000/friends`)
       .then(response => {
          this.setState({ friends: response.data });
       })
       .catch(err => {
         console.log(err);
       });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Friends</h1>
        </header>
        <Route path="/" render={ (props) => <NavWrapper {...props} menuData={this.state.menu}/> } />
        <Route exact path="/add-friend" component={SaveFriend} />
        <Route exact path="/search" component={FriendsList} />
        <Route path="/friend/:id" component={Friend}/>
      </div>
    );
  }
}

export default App;