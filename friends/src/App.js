import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      nameText:'',
      ageText: undefined,
      emailText:'',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addFriend = event => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/friends', 
        { 
          name: this.state.nameText,
          age: this.state.ageText, 
          email: this.state.emailText,
        })
      .then(response => {
        this.setState({
          friends: response.data,
          nameText:'',
          ageText: undefined,
          emailText:'',
        });
      })
      .catch(error => {
        console.log('error');
      })
  }

  updateFriend = (id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, 
      { 
        name: this.state.nameText,
        age: this.state.ageText, 
        email: this.state.emailText,
      })
      .then(response => {
        this.setState({
          friends: response.data,
          nameText:'',
          ageText: undefined,
          emailText:'',
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
      <h1>FRIEND LIST</h1>
        <FriendList 
          friends={this.state.friends}
          updateFriend={this.updateFriend}
          deleteFriend={this.deleteFriend}
        />
        <Form 
          nameText={this.state.nameText}
          ageText={this.state.ageText}
          emailText={this.state.emailText}
          handleChange={this.handleChange}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default App;
