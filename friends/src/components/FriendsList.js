import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend';


class FriendsList extends Component {
    constructor(){
        super();
        this.state={
            friendsData:[],
            friend: {
                age:'',
                email:'',
            }
        }
    }
  
    componentDidMount(){
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({friends: response.data});
        })
        .catch(err => console.log(err));
    }
   
  
    render() {
        return (
            <div className="friends-list">
                 {this.state.friendsData.map(friend => <Friend key={friend.id} friend={friend} />)}
            </div>
        )
    }
  }

export default FriendsList;