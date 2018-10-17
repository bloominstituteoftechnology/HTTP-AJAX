import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendForm from "./FriendForm";
import FriendList from "./FriendList";


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendData: [],
      friend: {
        name: '',
        age: 0,
        email:''
      },
    };
  }

   componentDidMount() {
     axios
     .get('http://localhost:5000/friends')
     .then(response => {
       this.setState({ friendData: response.data });
     })
     .catch(err => 
      console.log(err)); 
   }

   handleChange = event => {
    this.setState({
      friend: {
        ...this.state.friend, 
        [event.target.name]: event.target.value,
      }
    })
  }

   handleInput = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', 
    this.state.friend)
    .then(response => {
      this.setState({ friendData: response.data })
    })
    .catch(err => 
      console.log(err)); 
  }	 

 handleDelete= friendId => {
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <h1>Add Friend</h1> 
        <FriendForm form={this.state.friend}
        handleChange={this.handleChange}
        />
        <h2> Friend List: </h2>
        <FriendList 
        friend={this.state.friendData}
        handleDelete={this.handleDelete}
         />
      </div>
    )
  }
}

export default App;