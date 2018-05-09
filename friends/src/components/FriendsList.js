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
  } 



  render() {
    // console.log('state on friends', this.state)
    return(
      <div>
        <div className="row">
          {this.state.friends.map(friend => (
            <FriendCard key={friend.id} friend={friend}/>
          ))}

        <FriendAdd />
        </div>
        
      </div>
    )
  }
}

export default FriendsList;