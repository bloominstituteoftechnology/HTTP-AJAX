import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendsList from './components/friendsList/FriendsList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData : [],  
      name : "",
      age: PropTypes.number,
      email: "",     
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response =>{
      console.log("get response:", response);
      this.setState({friendsData : response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleNameChange = e => {
    console.log(e)
    this.setState ({name : e.target.value})
  }

  handleAgeChange = e => {
    console.log(e)
    this.setState ({age: e.target.value})
  }

  handleEmailChange = e => {
    console.log(e)
    this.setState ({email: e.target.value})
  }

  handleSubmitFriend = () => {
    const name = {name : this.state.name};
    axios
    .post("http://localhost:5000/friends", name)
    .then (response => {
      console.log("post response", response);
      this.setState({friendsData: response.data});
    })
    .catch(error=>{
      console.log(error)
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends HTTP AJAX</h1>
        </header>
        <form>
        <input 
          type = "text"         
          onChange = {this.handleNameChange}          
          value = {this.state.name}
          placeholder = "add friend name"
        /> <br></br>
        <input 
          type = "text"
          onChange = {this.handleAgeChange}
          value = {this.state.age}
          placeholder = "add age"
        /> <br></br>
        <input 
          type = "text"
          onChange = {this.handleEmailChange}
          value = {this.state.email}
          placeholder = "add email"
        /> <br></br>
        </form>
        <button onClick = {this.handleSubmitFriend}>
          Submit Friend
        </button>
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
