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
      age: 0,
      email: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios
      .post('http://localhost:5000/friends', { user })
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
          console.log('Axios response received')

        })
        .catch((err) => {
          console.log('WARNING: error!', err)
        })
  }

  render() {
    return (
      <div className="App">
        <FriendForm handleChange={this.handleChange} />
        <Friends friendsData={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
