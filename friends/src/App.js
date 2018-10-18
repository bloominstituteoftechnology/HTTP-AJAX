import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const blankFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: '',
      },
      updateFriend: {
        name: '',
        age: '',
        email: '',
      },
      updateId: null
    }
  }

  

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error))
  }

  changeHandler = (event) => {
    this.setState({ newFriend: {
      ...this.state.newFriend,
      [event.target.name]: event.target.value
    } })
  }

  changeHandler2 = (event) => {
    this.setState({ updateFriend: {
      ...this.state.updateFriend,
      [event.target.name]: event.target.value
    } })
  }

  addFriend = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => {
        this.setState({ 
          friends: response.data,
          newFriend: blankFriend, 
        })
      });
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch(error => console.log(error))
      
  }

  updateFriend = () => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.updateId}`,
        this.state.updateFriend
      )
      .then(response => {
        this.this.setState({
          friends: response.data,
          updateFriend: blankFriend
        })
      })
      .catch(error => console.log(error));
  }

  setUpForm = (event, friend) => {
    event.preventDefault();
    this.setState({
      updateFriend: friend,
      updateId: friend.id
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addFriend}>
          <input name="name" onChange={this.changeHandler} value={this.state.newFriend.name} type="text" placeholder="name" />
          <input name="age" onChange={this.changeHandler} value={this.state.newFriend.age} type="number" placeholder="age" />
          <input name="email" onChange={this.changeHandler} value={this.state.newFriend.email} type="text" placeholder="email" />
          <input onClick={this.addFriend} value="Add" type="submit" />
        </form>

        <form onSubmit={this.updateFriend}>
          <input name="name" onChange={this.changeHandler2} value={this.state.updateFriend.name} type="text" placeholder="name" />
          <input name="age" onChange={this.changeHandler2} value={this.state.updateFriend.age} type="number" placeholder="age" />
          <input name="email" onChange={this.changeHandler2} value={this.state.updateFriend.email} type="text" placeholder="email" />
          <input onClick={this.updateFriend} value="Update" type="submit" />
        </form>

        {this.state.friends.map(friend => (
        <div
          className="friend-card"
          key={friend.email}
        >
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          <button 
            onClick={event => {
              this.deleteFriend(event, friend.id);
              window.location.reload(true);
            }}
          >
            Delete
          </button>
          <button 
            onClick={event => {
              this.setUpForm(event, friend);
            }}
          >
            Update
          </button>
        </div>
      ))}
      </div>
    );
  }
}

export default App;
