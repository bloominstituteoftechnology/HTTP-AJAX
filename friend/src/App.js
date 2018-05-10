import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import FriendList from './FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendArray: [],
      name: '',
      age: '',
      email: '',
      id: '',
      }
    }
  
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
        .then((response) => {
          // console.log(response.data);
          this.setState({ friendArray: response.data });
        })
        .catch(error => console.log(error))
  }

  handleFriendChange = (event) => {
    this.setState ({ [event.target.name]: event.target.value });
  }

  handleAddFriend = () => {
    const newInfo = { name: this.state.name, age: this.state.age, email: this.state.email };

    axios.post('http://localhost:5000/friends', newInfo)
    .then( response => this.setState ({ friendArray: response.data, name: '',  age: '',  email: '' } ))
    .catch( err => console.log(err))   
 
  }

  handleRemoveFriend = () => {
    const stateId = this.state.id
    axios.delete(`http://localhost:5000/friends/${stateId}`)
    .then( response => this.setState ({ friendArray: response.data, id: ''} ))
    .catch( err => console.log(err))  
  }

  handleFriendUpdate = () => {
    const updateId = this.state.id
    const updateInfo = { name: this.state.name, age: this.state.age, email: this.state.email };

    axios.put(`http://localhost:5000/friends/${updateId}`, updateInfo )
    .then( response => this.setState ({ friendArray: response.data, id: '', name: '',  age: '',  email: ''} ))
    .catch( err => console.log(err))  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
        </header>
          <input name='name' type='text'value={this.state.name}  placeholder='name' onChange={this.handleFriendChange}/ >
          <input name='age' type='text' value={this.state.age}  placeholder='age'onChange={this.handleFriendChange}/ >
          <input name='email' type='text' value={this.state.email} placeholder='email' onChange={this.handleFriendChange}/ >
          <button onClick={this.handleAddFriend}>Submit Friend </button>
          <div>
            <input name='id' type='text' value={this.state.id} placeholder='id' onChange={this.handleFriendChange}/ >
            <button onClick={this.handleRemoveFriend}>Remove Friend </button>
          </div>
          <div>
            <button onClick={this.handleFriendUpdate}>Update Friend's List </button>
          </div>
          {this.state.friendArray.map( itemFriend =>( <div key={ itemFriend.id }>{itemFriend.id} {itemFriend.name} {itemFriend.age} {itemFriend.email}</div>))}
      </div>  
    );
  }
}

export default App;
