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
        friends : [],
        newFriend : {
                  age : '',
                  name : '',
                  email : ''
              },
        displayForm : false,
      }
  }

componentDidMount() {
    console.log("In CDM");
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({ friends : response.data }))
    .catch(error => console.log(error));
}

handleFormEvent = event => {
  alert("I was clicked");
}


changeHandler = (event) => {
    this.setState({ 
        newFriend  : { [event.target.name] : event.target.value } })
}

addFriend = (event) => {
  event.preventDefault()
  axios
     .post('http://localhost:5000/friends' , this.state.newFriend)
     .then(response => this.setState({ items : response.data}))
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
              handleFormEvent = {this.handleFormEvent}
          />

          <Form />
          
      </div>
    );
  } //render
} //App component

export default App;
