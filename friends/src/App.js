import React, { Component } from 'react';
import Friends from './Components/Friends';
import FriendForm from './Components/FriendForm';

const axios = require('axios');

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    const user = {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email
    }
    console.log('handleSubmit()')
    axios
      .post('http://localhost:5000/friends', user)
        .then(response => {
          console.log(response)
          console.log(response.data)
        })
  }

  componentDidMount() {
    console.log('component did mount!')
    axios
      .get('http://localhost:5000/friends')
        .then((response) => {
          this.setState({ friendsData: response.data })
          console.log('Axios response received')


        })
        .catch((err) => {
          console.log('WARNING: error!', err)
        })
  }

  render() {
    return (
      <div className="App">
        <FriendForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Friends friendsData={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
