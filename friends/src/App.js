import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Friends from './Components/Friends/Friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        // console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleNewFriend = e => {
    this.setState( { [e.target.name]: e.target.value});
  };

  addFriend = (e) => {
    const friend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email,
    };
    axios.post('http://localhost:5000/friends', friend).then(savedFriend => {
      console.log(savedFriend);
    }).catch(err => {
      console.log(err);
    });
    this.setState({ name: '', email: '', age: ''});
  };

  render() {
    return <div className="App">
        <h1>List of Friends</h1>
        <Route path="/" render={props => <Friends {...props} friends={this.state.friends} />} />
        {/* <Route path='/friend:id' /> */}
        <form onSubmit={this.addFriend}>
          <input type="text" onChange={this.handleNewFriend} placeholder="name" name="name" value={this.state.name} />
          <input type="text" onChange={this.handleNewFriend} placeholder="age" name="age" value={this.state.age} />
          <input type="text" onChange={this.handleNewFriend} placeholder="email" name="email" value={this.state.email} />
          <button type="submit">Add Friend</button>
        </form>
      </div>;
  }
}

export default App;
