import React, { Component } from 'react';
import FriendsList from './components/Friends/FriendsList';
import AddFriendForm from './components/EditFriends/AddFriendForm';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsData: [],
      name: '',
      age: '',
      email: '',
      food: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friendsData: response.data }))
      .catch(err => console.log(err))
  }

  handleSetData = data => {
    this.setState({ friendsData: data });
  };

  handleInput = event => {
    if (event.target.name === 'age') {
      if (isNaN(event.target.value) || event.target.value.includes('.') || event.target.value > 125) {
        return;
      }
    }
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    if (this.state.name === '' || this.state.age === '' || this.state.email === '' || this.state.food === '') {
      alert('You forgot to input a value!');
      return;
    }

    const friend = { name: this.state.name, age: this.state.age, email: this.state.email, food: this.state.food }
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => this.setState({ friendsData: response.data, name: '', age: '', email: '', food: '' }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">

        <Navigation />

        <Route path='/edit' render={props => <AddFriendForm {...props}
          onClick={this.handleSubmit}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          food={this.state.food}
          handleInput={this.handleInput} />} />

        <FriendsList handleSetData={this.handleSetData} friends={this.state.friendsData} />

      </div>
    );
  }
}

export default App;
