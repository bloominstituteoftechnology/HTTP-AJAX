import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import AddFriendForm from './components/AddFriendForm';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friendName: '',
      friendAge: '',
      friendEmail: ''
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log("HERE is your response", response);
      this.setState({friends: response.data});
    })
    .catch(err => {
      console.log("Error is ", err);
    })
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value});
  }

  editHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  setData = data => {
    this.setState({friends: data})
  }

  handleSubmitFriend = e => {
    e.preventDefault();
    console.log("Hi there");
    const newFriend = { name:this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail};
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({friends: response.data, friendName: '',
      friendAge: '', friendEmail: ''});
      window.location.href = "/";
      })
      .catch(err => {
        console.log("POST ERROR is", err);
      })
  }



  render() {
    return (
      <div className="App">
        <NavLink to="/friend-form"><button>Add friend</button></NavLink>
        <NavLink to="/"><button>View Freinds</button></NavLink>

        <Route exact path="/" render={props => <FriendsList {...props}
        friends={this.state.friends} handleChange={this.handleChange}
        setData={this.setData} />} />

        <Route path="/friend-form" render={props => <AddFriendForm {...props}
        handleChange={this.handleChange}
        name = {this.state.friendName} age={this.state.friendAge}
        email={this.state.friendEmail}
        handleSubmitFriend={this.handleSubmitFriend} />} />


      </div>
    );
  }
}

export default App;
