import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend.js'
import Form from './components/Form.js'



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
    this.setState({friends : friend})
}

//RENDER FUNCTION 
render() {
    console.log("Rendering", this.state.friends)
    return (
      <div className="App">

          <Friend 
              friend =   {this.state.friends}
          />

          <Form 
              updateFriends = {this.updateFriends}
          />
          
      </div>
    );
  } //render
} //App component

export default App;
