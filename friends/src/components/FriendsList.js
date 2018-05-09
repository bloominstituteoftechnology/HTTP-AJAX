import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import FriendAdd from './FriendAdd';


class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }

  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
        .then(response => {
          this.setState(() => ({ friends: response.data }));
          // console.log(response)
        })
        .catch(err => {
          console.log("Error: ", err)
        })
  }; 

  handleSubmit = (newFriend) => {
    // console.log(newFriend)
    axios
      .post(`http://localhost:5000/friends`,{
        name: newFriend.name,
        age: newFriend.age,
        email: newFriend.email
      })
        .then(response => {
          console.log("post response:",response)
          const newFriends = response.data;
          this.setState({
              friends: newFriends
          })
        })
        .catch(err => {
          console.log("post err:",err)
        }) 
  }

  render() {
    // console.log('state on friends', this.state)
    return(
      <div>
        <div className="row">
          {this.state.friends.map(friend => (
            <FriendCard key={friend.id} friend={friend}/>
          ))}

        <FriendAdd handleSubmit={this.handleSubmit}/>
        </div>
        
      </div>
    )
  }
}

export default FriendsList;