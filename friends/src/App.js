import React, { Component } from 'react';
import FriendsList from './FriendsList';
import FriendForm from './Friends';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friendsData: [],
      friend: ''
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log("Get Response",response);
      this.setState({friendsData: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  handleSubmitFriend = () => {
    const friend ={ name: this.state.friend };
    axios
    .post('http://localhost:5000/friends',  friend )
    .then(response => {
      console.log("POST Response",response);
    this.setState({ friendsData: response.data, friend: '' });
    })
    .catch(error => console.log(error));
  };

  handleNameChange = e => {
    this.setState({ friend: e.target.value });
  };

  handleDelete = id => {
    // delete request to the server with the id.
    axios
    .delete(`${'http://localhost:5000/friends'}/${id}`)
      .then(response => {
        console.log(response);
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
handleDate = data => this.setState({friendsData: data});
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Friends</h1>
        {/* <input 
        type= 'text' 
        placeholder="friend name" 
        onChange={this.handleNameChange} 
        name="friend"
        value={this.state.friend}
          />
          <input 
        type= 'text' 
        placeholder="Age" 
        onChange={this.handleNameChange} 
        name="friend"
        value={this.state.friend}
          />
          <input 
        type= 'text' 
        placeholder="Email" 
        onChange={this.handleNameChange} 
        name="friend"
        value={this.state.friend}
          /> */}
          <button onClick={this.handleSubmitFriend}>Add Friend</button>
        </header>
        
        <FriendsList 
        handleDelete={this.handleDelete}
        friends={this.state.friendsData} />
        
        <FriendForm 
        // friends={this.state.friendsData}
        // handleSubmitFriend={this.handleSubmitFriend}
        // value={this.state.friend}
        handleNameChange ={this.handleNameChange}
        />
        
      </div>
    );
  }
}

export default App;
