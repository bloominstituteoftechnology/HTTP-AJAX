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

  handleRemoveFriend(friendId) {
    // const removeList = this.state.friendArray;

    // removeList.forEach((name, i) => {
    //   if (name.id = friendId) {
    //     removeList.splice(i, 1);
    //   }
    // });
    // this.setState({ removeList });
    const stateId = this.state.id
    axios.delete(`http://localhost:5000/friends/${stateId}`)
    .then( response => this.setState ({ friendArray: response.data, name: '',  age: '',  email: '' } ))
    .catch( err => console.log(err))  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.friendArray.map( itemFriend =>( <div key={ itemFriend.id }>{itemFriend.id} {itemFriend.name} {itemFriend.age} {itemFriend.email}</div>))}
        <input name='name' type='text'value={this.state.name}  onChange={this.handleFriendChange}/ >
          <input name='age' type='text' value={this.state.age} onChange={this.handleFriendChange}/ >
          <input name='email' type='text' value={this.state.email} onChange={this.handleFriendChange}/ >
          <button onClick={this.handleAddFriend}>Submit Friend </button>
          <input name='id' type='text' value={this.state.id} onChange={this.handleFriendChange}/ >
          <button onClick={this.handleRemoveFriend}>Remove Friend </button>
          {/* <FriendList
            removeFriend={handleRemoveFriend}
            friendArray={this.state.friendArray}
          /> */}
      </div>  
    );
  }
}

export default App;
