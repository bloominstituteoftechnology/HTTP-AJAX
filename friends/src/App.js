import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      id: '',
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then( response => this.setState({friends: response.data}))
      .catch( err => console.log(err))
    // console.log(this.state.friends);
  }

  //C R U D 
  // Create = POST
  handleNewFriendInput = (e) => {
    console.log([e.target.value]);
    this.setState({[e.target.placeholder]: e.target.value})
  }
  handleNewFriendSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })
      .then( response => this.setState({friends: response.data}))
      .catch( err => console.log(err))
    console.log(e);
  }

  handleDeleteFriendButton = (e) => {
    // console.log(e.target.parentNode.children[0]);
    // console.log(e.target.parentNode.id)
    // console.log(this.state);
    axios.delete(`http://localhost:5000/friends/${e.target.parentNode.id}`)
      .then( response => {
        this.setState({friends: response.data});
        console.log(response);
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleNewFriendSubmit}>
        <h3>Add New friend:</h3>
        <input placeholder='name' onChange={this.handleNewFriendInput}></input>
        <input placeholder='age' onChange={this.handleNewFriendInput}></input>
        <input placeholder='email' onChange={this.handleNewFriendInput}></input>
        <button>Submit</button>
      </form>
        {this.state.friends.map( (eachFriend) => {
          return (
            <div key={eachFriend.id} id={eachFriend.id} className='friend-box'>
              <div>{eachFriend.name}</div>
              <div>{eachFriend.age}</div>
              <div>{eachFriend.email}</div>
              <form>
                <p>Update friend:</p>
                <input placeholder='name'></input>
                <input placeholder='age'></input>
                <input placeholder='email'></input>
                <button>Submit</button>
              </form>
              <button onClick={this.handleDeleteFriendButton}>DELETE FRIEND</button>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
