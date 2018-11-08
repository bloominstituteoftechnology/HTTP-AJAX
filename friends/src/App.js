import React, { Component } from 'react';
import './App.css';
import FriendList from './Components/FriendsList'

import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  
   }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
    .then (response => {
      this.setState({friends: response.data});
    })
    .catch(err => {
      console.log(err);
    })

  console.log('friends Array', this.state.friends)
  };


  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        {this.state.friends.map( friends => {
          return (
      
          <FriendList 
          id={friends.id} 
          name={friends.name} 
          age={friends.age} 
          email={friends.email} /> 
          )
        })
    
        }


       
        </header>
      </div>
    );
  }
}

export default App;
