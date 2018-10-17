import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
  }

  changeHandler = (e) => {
    this.setState({newFriend: {
                  ...this.state.newFriend,
                  [e.target.name]: e.target.value
                }
              })
  }

  deleteFriend = (e) => {
    e.preventDefault();
    axios
      .delete('http://localhost:5000/friends/', {params : {id: e.target.id}})
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
  }



  addFriend = (e) => {
    e.preventDefault();
    const url = 'http://localhost:5000/friends';
    axios
      .post(url , this.state.newFriend)
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
  }

  updateFriend = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${e.target.id}`, this.state.newFriend)
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return(
          <div className = 'friend' key = {friend.id}>
            <p>{friend.name} {friend.age} {friend.email}</p>
            <button onClick={this.updateFriend} id={friend.id}>Update</button>
            <button onClick={this.deleteFriend} id={friend.id}>X</button>
          </div>
          );
        })}
        <form>
          <input onChange={this.changeHandler} name ="name" type = "text" placeholder = "Name"/>
          <input onChange={this.changeHandler} name = "age" type = "text" placeholder = "Age"/>
          <input onChange={this.changeHandler} name= "email" type = "text" placeholder = "Email"/>
          <button  onClick={this.addFriend}>Add New Friend</button>
        </form>
      </div>
    );
  }
}

export default App;
