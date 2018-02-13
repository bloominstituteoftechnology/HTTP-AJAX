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
        <AddFriend name={this.state.name} age={this.state.age} email={this.state.email}/>
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {this.setState({friends: response.data})})
    .catch(error => console.log('error message: ', error));
  }
  _friendChangeHandler = (fc) => {
    this.setState({value: fc.target.value});
  }

  _friendSubmitHandler = (fc) => {
    fc.preventDefault();
    axios.post('http://localhost:5000/friends', { name: this.state.name, age: this.state.age, email: this.state.email })
    .then(result => this.setState({friends: result.data, name: '', age: '', email: ''}))
    .catch(error => console.log(error))
  }
}

export default App;
