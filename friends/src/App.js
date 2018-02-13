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
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {this.setState({friends: response.data})})
    .catch(error => console.log('error message: ', error));
  }
  _friendChangeHandler = (fc) => {
    console.log('I am state in the _friendChangeHandler: ', this.state)
    this.setState({friends: [fc.target.name] = fc.target.value});
  }
  _friendSubmitHandler = (fc) => {
      fc.preventDefault();
      axios.post('http://localhost:5000/friends', { name: this.props.name, age: this.props.age, email: this.props.email })
      .then(result => this.setState({friends: result.data, name: '', age: '', email: ''}))
      .catch(error => console.log(error))
  }
  render() {
  console.log('I am this in App: ', this)
    return (
      <div className="App">
        <AddFriend name={this.state.name} age={this.state.age} email={this.state.email} friends={this.state.friends}/>
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
