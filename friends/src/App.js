import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';

const serverURL = 'http://localhost:5000/friends';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      friendName: '',
      friendAge: '',
      friendEmail: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addFriend = (ev) => {
    ev.preventDefault();


    if(this.state.friendName === '' || this.state.friendAge === '' || this.state.friendEmail === ''){
      return alert('Please Fill Out All Inputs');
    }
    
    let friend = { id: this.state.friends.length+2, 
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail};

    axios
      .post(serverURL, friend)
      .then(res => this.setState({ 
        friends: res.data,
        friendName: '',
        friendAge: '',
        friendEmail: ''
        }))
  }

  deleteFriend = (id) => {

    axios
      .delete(`${serverURL}/${id}`)
      .then(res => this.setState({ friends: res.data }))

  }

  componentDidMount() {
    axios.get(serverURL)
    .then(res => {
      console.log(res);
      this.setState({friends: res.data})
    })
  }
  
  render() {
    return (
      <>
      <form onSubmit={this.addFriend} className="add-friend-form" >
        <input autocomplete='off' type="text" name="friendName" 
          placeholder="Friend Name" value={this.state.friendName}
          onChange={this.handleChange} />
        <input type="text" name="friendAge" 
          placeholder="Friend Age" value={this.state.friendAge}
          onChange={this.handleChange} />
        <input type="text" name="friendEmail" 
          placeholder="Friend Email" value={this.state.friendEmail}
          onChange={this.handleChange} />
        <input type="submit" style={{display: 'none'}} />
        <div className="add-friend-submit" onClick={this.addFriend}>Add Friend</div>
      </form>
      <div className="App">
      {this.state.friends.map(friend => (<Friend friend={friend} key={friend.id} deleteFriend={this.deleteFriend}/>))}
      </div>
      </>
    );
  }
}

export default App;
