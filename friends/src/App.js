import React, { Component } from 'react';
import Friends from './components/Friends/Friends';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend:{
        name:'',
        age: 0,
        email:'',
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      this.setState({ friends: response.data })
      console.log(response)
    })
    .catch((err)=> {
      console.log(err);
    })

  }

  handleChange = event =>{
    event.preventDefault();
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    })

  }

  addFriend = event =>{
    event.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.friend)
    .then(response => this.setState({ friends: response.data}))
    .catch(err => {
      console.log(err)
    })

  }


  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} addFriend={this.addFriend} handleChange={this.handleChange} newFriend={this.state.friend} />
      </div>
    );
  }
}

export default App;
