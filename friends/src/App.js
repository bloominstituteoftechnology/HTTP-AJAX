import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListFriend from './components/ListFriend';
import NewFriend from './components/NewFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

 componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data}))
      .catch(error => console.log(error))
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmitNewFriend = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
        this.setState({
          friends: response.data,
          friend: {
            name: '',
            age: '',
            email: ''
          }
        })
        console.log(response)
      })
      .catch(error => console.log(error));
  }

 
  render() {
    const {friends, friend} = this.state
    return (
      <div className="App">
        <NewFriend 
          newFriend={friend}
          handleChange={this.handleChange}
          submitNewFriend={this.handleSubmitNewFriend}
        />
        <ListFriend friends={friends} />
      </div>
    );
  }
}

export default App;
