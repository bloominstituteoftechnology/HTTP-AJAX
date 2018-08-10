import React,{Component } from 'react';
import axios from "axios";
import Friend from "./Friend.js";
import { Link } from "react-router-dom";
 

export default class FriendList extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          friends : []
       };
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  editFriend = (id) => {
    const updatedFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriendObj)
    .then(response => {
       this.setState({
        friends:response.data
      })
    })
  }
  
  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
  }
  
     render() {
      return (
        <div>
       <Link to ="/">
       <div className="friend-list">
        {this.state.friends.map(friend => (
          <Friend deleteMethod = {this.deleteFriend}friend={friend} key={friend.id}/>
         ))}
        </div>
        </Link>
        <button onClick={() => this.editFriend()}>Edit</button>
        </div>
       
    
      );
    }
  }
  
