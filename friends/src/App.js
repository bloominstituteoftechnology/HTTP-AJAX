import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList'
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
constructor () {
  super ();
  this.state = {
    friends: [],
      name: '',
      age: null,
      email: '',  
      likes: '',
      pronoun: '', 
    
  };
};

componentDidMount() {
  axios
    .get('http://localhost:5000/friends.')
    .then(response => this.setState({ friends: response.data}) )
    .catch(error => console.log(error))
}

changeHandler = event => {
  event.preventDefault();
  this.setState({[event.target.name]: event.target.value});
}

  render() {
    return (
      <div className="App">
       <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}


export default App;
