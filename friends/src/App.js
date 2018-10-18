import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend.js'
import Form from './components/Form.js'
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



class App extends Component {
  constructor() {
      super();
      this.state = {
        friends : []
      }
  }

componentDidMount() {
    console.log("In CDM");
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({ friends : response.data }))
    .catch(error => console.log(error));
}

updateFriends = (friend) => {
      this.setState({ friend })
}

//RENDER FUNCTION 
render() {
    console.log("Rendering", this.state.friends)
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        
          <h1>Friends List</h1>
          <Friend 
              friend = {this.state.friends}
          />

          <Form 
              updateFriends = {this.updateFriends}
              
          />
          
      </div>
    );
  } //render
} //App component

export default App;
