import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList'
import AddFriend from './components/AddFriend/AddFriend'
import axios from 'axios';


class App extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  }
  render() {
    return (
      <div className="App">
        <AddFriend onCreate={this.getFriends}/>
        <FriendsList 
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          friends={this.state.friends} 
          onX={this.deleteFriend} 
          onNewDeets={this.newDeetsSubmitHandler} 
          onDeetsChange={this.deetsChangeHandler}
        />
      </div>
    );
  }
  getFriends = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {this.setState({friends: response.data})})
    .catch(error => console.log('error message: ', error));
  }
  componentDidMount() {
    this.getFriends();
  }
  deleteFriend = id => {
    const endpoint = `http://localhost:5000/friend  s/${id}`;
    axios.delete(endpoint)
    .then(response => this.setState({ friends: response.data}))
    .catch(() => {
      console.error('error deleting')
    })
  }
  newDeetsSubmitHandler = id => {
    const endpoint = `http://localhost:5000/friends/${id}`;
    axios.put(endpoint)
    .then(response => this.setState({ friends: response.data}))
    .then(response => this.getFriends())
    .catch(() => {
      console.error('error deleting')
    })
  }
  deetsChangeHandler = (event) => {
    let { name, value } = event.target;

    this.setState({ [name]: value });
    
    if (event.target.type === 'number') {
        value = Number('number')
    }
}
}

export default App;
