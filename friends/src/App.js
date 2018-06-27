import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import EditFriends from './components/EditFriends/EditFriends';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsData: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friendsData: response.data }))
      .catch(err => console.log(err))
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email }
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => this.setState({ friendsData: response.data, name: '', age: '', email: '' }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/edit'>Edit</Link>
        </div>

        <FriendsList friends={this.state.friendsData} />
        <Route path='/edit' render={props => <EditFriends {...props} onClick={this.handleSubmit} name={this.state.name} age={this.state.age} email={this.state.email} handleInput={this.handleInput} />} />
      </div>
    );
  }
}

export default App;
