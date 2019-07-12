import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendsList from './Components/friendsList';
import FriendsForm from './Components/friendsForm';


const URL = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData : [],  
      name : "",
      age: "",
      email: "",
    };
  }
  
  componentDidMount() {
    axios
    .get(URL)
    .then(response => {
      console.log("get response:", response);
      this.setState({friendsData : response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSetData = data => {
    this.setState({friendsData: data})
  }

  handleDelete = id => {
    axios
    .delete(`${URL}/${id}`)
    .then(response => this.handleSetData(response.data))
    .catch(err => {
      console.log(err);
    })
  }



 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends</h1>
        </header>
        <FriendsList 
        Friends = {this.state.friendsData} 
        handleSetData = {this.handleSetData}
        handleDelete = {this.handleDelete}
         />
         <FriendsForm handleSetData = {this.handleSetData} />
      
      </div>
    );
  }
}

export default App
