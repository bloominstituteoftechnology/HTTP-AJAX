import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';

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
    this.setState({
      friends: [...this.state.friends,  
        { id: this.state.friends.length+2, 
          name: this.state.friendName,
          age: this.state.friendAge,
          email: this.state.friendEmail}],
      friendName: '',
      friendAge: '',
      friendEmail: ''
        });
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
    .then(res => {
      console.log(res);
      this.setState({friends: res.data})
    })
  }
  
  render() {
    return (
      <>
      <form onSubmit={this.addFriend} className="add-friend-form" >
        <input type="text" name="friendName" 
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
      {this.state.friends.map(friend => (<Friend friend={friend} key={friend.id} />))}
      </div>
      </>
    );
  }
}

export default App;
