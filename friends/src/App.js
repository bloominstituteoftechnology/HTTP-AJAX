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
  
  handleInputName = (event) => {
    this.setState( {name: event.target.value} );
    
  }
  
  handleInputAge = (event) => {
    this.setState(  {age: event.target.value} );
    
  }
  
  handleInputEmail = (event) => {
    this.setState( {email: event.target.value} );
    
  }
  
  
  
  handleSubmit = (event) => {
    //event.preventDefault();

    // const { name, age, email } = this.state.newFriend
    // 
    // const friend = {
    //   name,
    //   age,
    //   email,
    // };
    
    //console.log(friend);
    
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
          <input type="text" onChange={this.handleInputName} placeholder="name"
              value={this.state.name} />
            <br/>
            <input type="number" onChange={this.handleInputAge} placeholder="age" 
              value={this.state.number} />
            <br/>
            <input type="text" onChange={this.handleInputEmail} placeholder="email"
              value={this.state.email} />
            <br/>
            <button type='submit'>submit</button>
          </form>

        </div>
      </div>
      
    );
  }
  
}

export default App;
