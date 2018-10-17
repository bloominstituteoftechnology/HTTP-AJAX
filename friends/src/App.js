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
      email: ''
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
    console.log('submitted');
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
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
