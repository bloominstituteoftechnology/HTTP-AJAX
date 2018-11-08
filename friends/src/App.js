import React, { Component } from 'react';
// import './App.css';
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

inputChangeHandler = (e) => {
  this.setState({[e.target.name]: e.target.value})
}


  submitNewFriend = (e) => {
    e.preventDefault()
    console.log(this.state)
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.post('http://localhost:5000/friends', {name: this.state.name, age: this.state.age, email: this.state.email })
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
  <form onSubmit={this.submitNewFriend}>
             <input name='name' type='text' value={this.state.name}   placeholder='Name Here' onChange={this.inputChangeHandler} />
             <input name='age' type='text' value={this.state.age}     placeholder='Age Here' onChange={this.inputChangeHandler} />
             <input name='email' type='text' value={this.state.email} placeholder='Email Here' onChange={this.inputChangeHandler} />
          </form>

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
