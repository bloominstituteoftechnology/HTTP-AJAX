import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      isLoading: true,
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
          .then(res => {
            this.setState({ friends: res.data, isLoading: false });
          })
          .catch(err => {
            console.log(err);
          });
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email,
    };
    axios.post('http://localhost:5000/friends', newFriend)
          .then( res =>
            this.setState({name: '', age: '', email: '', friends: res.data})
          );
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ?
          <h1>Loading Friends, one moment please...</h1> :
          <FriendList friends={this.state.friends} />
        }
        <FriendForm
          input={this.handleInputChange}
          submit={this.handleSubmit}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
