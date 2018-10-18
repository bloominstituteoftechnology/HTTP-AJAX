import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      editMode: false
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: parseInt(this.state.age),
        email: this.state.email
      })
      .then(res =>
        this.setState({ friends: res.data, name: '', email: '', age: '' })
      );
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateClick = e => {
    e.preventDefault();
    const id = e.target.parentNode.id;
    const friend = this.state.friends.find(friend => `${friend.id}` === id);
    if (!this.state.editMode) {
      this.setState({
        name: friend.name,
        age: friend.age,
        email: friend.email,
        editMode: true
      });
    } else {
      axios
        .put(`http://localhost:5000/friends/${id}`, {
          name: this.state.name,
          age: parseInt(this.state.age),
          email: this.state.email
        })
        .then(res =>
          this.setState({
            friends: res.data,
            name: '',
            age: '',
            email: '',
            editMode: false
          })
        );
    }
  };

  handleDeleteClick = e => {
    const id = e.target.parentNode.id;
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }));
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div className="App">
        <h1>We could be friends</h1>
        <Form
          name={name}
          age={age}
          email={email}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {!this.state.friends.length ? (
          <div>Loading Friends... if you have any...</div>
        ) : (
          <FriendsList
            friends={this.state.friends}
            handleDeleteClick={this.handleDeleteClick}
            handleUpdateClick={this.handleUpdateClick}
          />
        )}
      </div>
    );
  }
}

export default App;
