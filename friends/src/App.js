import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Components/Form/Form';
class App extends Component {
  constructor() {
    super();
    this.state={
      friends:[],
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }; 
  }
  inputHandler = e => {
    this.setState({ friend: e.target.value });
  };

  addFriend() {
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
        this.setState({
          friends: response.data,
          friend: { name: '', age: '', email: '' },
        });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  render() {
    if (this.state.friends) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Friends List</h1>
        </header>
        <ul>
          {this.state.friends.map(friend => (
          <div>
            <h1 key={friend.id}>{friend.name}</h1>
            <li>Age:{friend.age}</li>
            <li>E-Mail:{friend.email}</li>
          </div>
          ))}
        </ul>
      <Form handleSubmit={this.addFriend} value={this.inputHandler}/>
      </div>
    );
  };
  };
};

export default App;
