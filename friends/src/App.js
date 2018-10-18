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

  handleSetData = data => this.setState({ friends: data })
 
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
      })
      .catch(error => console.log(error));
  }

  handleDeleteFriend = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(error => console.log(error));
  }

 
  render() {
    const {friends, friend} = this.state;
    console.log(friends);
    console.log(friend);
    return (
      <div className="App">
        <NewFriend 
          newFriend={friend}
          handleChange={this.handleChange}
          submitNewFriend={this.handleSubmitNewFriend}
        />
        <ListFriend friends={friends} 
          handleSetData={this.handleSetData}
          handleDeleteFriend={this.handleDeleteFriend}
        />
      </div>
    );
  }
}

export default App;
