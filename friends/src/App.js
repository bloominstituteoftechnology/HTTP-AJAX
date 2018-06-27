import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
import './App.css';
import axios from 'axios';
import FriendsList from "./FriendsList";
import FriendForm from './FriendForm';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      friends : [],
        name: '',
        age: 0,
        email: '',         
    }
  }

  componentDidMount(){
    this.axiosGet()
  }

axiosGet = () => {
    axios
    .get('http://localhost:5000/friends')
    .then( res =>{
      this.setState({friends:res.data})
    }
  )
}

onChange = e => {
  e.preventDefault();
  console.log(typeof(e.target.value));
  this.setState({[e.target.name]: e.target.value });
}

formSubmit = e =>{
  e.preventDefault();
  let newFriend = {
    name : this.state.name,
    age: Number(this.state.age),
    email: this.state.email,
  }

  axios.post('http://localhost:5000/friends', newFriend)
    .then( res => {
      this.axiosGet()
    }
  )
}
  
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
        <FriendForm onChange = {this.onChange} formSubmit={this.formSubmit}/>
>>>>>>> 39468339efffe51f969e9a705feac07ae6f47b48
      </div>
    );
  }
}

export default App;
