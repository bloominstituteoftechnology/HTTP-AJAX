import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList'

import './App.css';


class App extends Component {
constructor () {
  super ();
  this.state = {
    friends: [],
      name: '',
      age: '',
      email: '',  
      
    
  };
};

componentDidMount() {
  axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({ friends: response.data}) )
    .catch(error => console.log(error))
}

changeHandler = event => {
  event.preventDefault();
  this.setState({[event.target.name]: event.target.value});
}


render() {
  console.log('data..', this.state.friends);
  return (
    
    <div className="App">
      {
       this.state.friends.map(element => {
         return <FriendsList friends={element}/>
       })
      }
    </div>
  );
}
}


export default App;
