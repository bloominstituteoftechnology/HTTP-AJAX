import React, { Component } from 'react';
import axios from 'axios';

import FriendsDisplay from './components/FriendsDisplay/FriendsDisplay';
import './App.css';

class App extends Component {
  constructor() {
    
    super();
    this.state = {
      friends: [],
      
        name: '',
        age: null,
        email: ''
      
    }
  }
  
  
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(`error getting data from server: ${error}`);
    });
  }
  
  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if ("name" === event.target.name){
      this.setState( {name: event.target.value} );
    } else if ("age" === event.target.name){
      this.setState( {age: event.target.value} );
    } else if ("email" === event.target.name){
      this.setState( {email: event.target.value} );
    }
    
    
  }
  
  handleSubmit = (event) => {
    //event.preventDefault();
    
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }
  
    axios.post('http://localhost:5000/friends', newFriend )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(`error posting data to a server ${error}`);
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="App">
          {this.state.friends.map((friend, i) =>{
            return (
              <FriendsDisplay key={i} friend={friend} />
            )  
          })}

          <form onSubmit={this.handleSubmit} className="input">
            Add new friend:
            <br/>
          <input type="text" onChange={this.handleInput} placeholder="name"
              name="name" value={this.state.name} />
            <br/>
            <input type="number" onChange={this.handleInput} placeholder="age" 
              name="age" value={this.state.number} />
            <br/>
            <input type="text" onChange={this.handleInput} placeholder="email"
              name="email" value={this.state.email} />
            <br/>
            <button type='submit'>submit</button>
          </form>

        </div>
      </div>
      
    );
  }
  
}

export default App;
