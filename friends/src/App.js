import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Friend from './Friend';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }  
  }

 componentDidMount(){
  Axios.get('http://localhost:5000/friends')
  .then(response => this.setState({friends: response.data}))
  .catch(err => console.log(err));
 }
  render() { 
    console.log(this.state)
    return ( 
      <div className="App">
        <h1>Friends List</h1>
        {this.state.friends.map((person) => (
          <Friend key={person.id} friend={person}/>
        ))}
      </div>
     );
  }
}

export default App;
