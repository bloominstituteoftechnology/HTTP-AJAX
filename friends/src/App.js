import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './list';
import NewFriend from './newFriend';

const url = 'http://localhost:5000/friends'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],  
      name: '',
      age: null, 
      email: '',
      } 
  }
  
  componentDidMount() {
    console.log('mounted');
    axios.get(url).then(response => {
      console.log(response)
      this.setState({
        friends: response.data
      })
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  
  click = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })   
  }

  submit = (event) => {
    event.preventDefault();
    console.log('submit');
    axios.post(url, {
      name: this.state.name, 
      age: this.state.age,
      email: this.state.email
    })
    .then( () => {
      axios.get(url).then(response => {
        console.log(response)
        this.setState({
          friends: response.data
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    })
  }



  render() {
    return (
      <div className="App">
       
        <h1>mjk-HTTP-AJAX</h1>
        
        <div className="sub-app">
          <div className="component">
            {this.state.friends.map(friend => {
              return <Friend key={friend.id} data={friend}>{friend.name}</Friend>
            })}
          </div>
        </div>
        
        <NewFriend click={this.click} submit={this.submit} data={this}/>
     
      </div>
    );
  }
}

export default App;
