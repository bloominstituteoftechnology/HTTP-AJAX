import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import FriendsList from './Components/FriendsList';
import FriendForm from './Components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friendData:  {
        name:"", 
        age: "", 
        email:"",
        id: ""
      }
    };
  }

  // handleSetData = data => this.setState({avengersData:data})

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      console.log("GET RESPONSE: ". response);
      this.setState({friendsData:response.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  addNewFriendData = (e) => {
    const friendData = {friendData: this.state.friendData};
    const friendDataBlank = {
      name: "",
      age: "", 
      email: "",
      // id: ""
    }
    axios 
      .post("http://localhost:5000/friends", friendData)
      .then(response => {
        console.log("POST RESPONSE", response)
        this.setState({friendsData: response.data, friendData: friendDataBlank});
      })
      .catch(error => console(error))
  }

  handleNewFriendData = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    this.setState({friendData: {
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    } })
  }

  render() {
    return (
      <div>
        <div style={{fontWeight: 'bold'}} > FRIENDS LIST</div>
        <FriendsList 
          friends = {this.state.friendsData}
        />
        <br />
        <FriendForm 
          addNewFriendData = {this.addNewFriendData}
          handleNewFriendData = {this.handleNewFriendData}
          friendData = {this.state.friendData}
        />
      </div>
    );
  }
}

export default App;
