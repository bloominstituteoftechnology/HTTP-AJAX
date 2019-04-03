import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Form from './components/Form'

const Friend = props => {
  return (
  <div>{props.friends.name} {props.friends.age} {props.friends.email}</div>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    // ajax request to get the items from a server on mount
    //1. invoke .get
    //2. pass in the server url - base url + endpoint
    axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friends: res.data });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  createFriend() {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
  
    this.setState ({
      friends: [this.state.friends, newFriend]
    })

  }

  handleChanges = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}


  render() {
    console.log(this.state)
    return (
      <div className="App">
      {/* <form onSubmit={this.createFriend}>
        <input placeholder="name..." title="name" onChange={this.handleChanges}></input>
        <input placeholder="age..." title="age" onChange={this.handleChanges}></input>
        <input placeholder="email..." title="email" onChange={this.handleChanges}></input>
      </form>
      <button>Add New Friend</button> */}
      <Form  handleChanges={this.handleChanges} createFriend={this.createFriend}/>
      <div>
        {this.state.friends.map((friend, id) => 
            <Friend key={friend.id} friends={friend}/>
        )}
      </div>
      </div>
    );
  }
}

export default App;
