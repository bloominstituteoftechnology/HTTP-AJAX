import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListOfFriends from './ListOfFriends';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
=======
>>>>>>> bce6c9394095fc158864ecc61660c29829eaa571

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
<<<<<<< HEAD
      name: '',
      age: '',
      email: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newFriendObj = { 
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };    
    
    axios
    .post("http://localhost:5000/friends", newFriendObj)
    .then(response => {
      console.log("GET RESPONSE: ", response);

      this.setState({ friendsList: response.data, name: '', age: '', email: '' });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleSetData = friends => this.setState({ friendsList: friends });
=======
      newFriend: '',
      newAge: 0,
      newEmail: ''
    }
  }

  handleSetData = data => this.setState({ friendsList: data });
>>>>>>> bce6c9394095fc158864ecc61660c29829eaa571
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ friendsList: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

<<<<<<< HEAD
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


=======
>>>>>>> bce6c9394095fc158864ecc61660c29829eaa571
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
<<<<<<< HEAD
        <form>
          <input
            type='text'
            placeholder='Name...'
            onChange={this.handleChange}
            name='name'
            value={this.state.name}
          />
          <input
            type='number'
            placeholder='Age...'
            onChange={this.handleChange}
            name='age'
            value={this.state.age}
          />
          <input
            type='text'
            placeholder='Email...'
            onChange={this.handleChange}
            name='email'
            value={this.state.email}
          />
          <button onClick={this.handleSubmit}>Submit New Friend</button>
        </form>

        <Route path='/' render={(props) => <ListOfFriends {...props} friendsData={this.state.friendsList} handleSetData={this.handleSetData} /> }
        />
=======
        <input
          type='text'
          placeholder='Name...'
          onChange={this.handleChange}
          name='newFriend'
          value={this.state.newFriend}
        />
        <input
          type='number'
          placeholder='Age...'
          onChange={this.handleChange}
          name='newAge'
          value={this.state.newAge}
        />
        <input
          type='text'
          placeholder='Email...'
          onChange={this.handleChange}
          name='newEmail'
          value={this.state.newEmail}
        />
        <button onClick={this.handleSubmit}>Submit New Friend</button>

        <ListOfFriends friendsData={this.state.friendsList} handleSetData={this.handleSetData} />
>>>>>>> bce6c9394095fc158864ecc61660c29829eaa571
      </div>
    );
  }
}

export default App;
