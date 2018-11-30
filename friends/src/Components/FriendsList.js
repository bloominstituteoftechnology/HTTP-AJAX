import React, { Component } from 'react';
import Friends from './Friends';
import axios from 'axios';
import FriendsForm from './FriendsForm';

class FriendsList extends Component {

    constructor() {
        super();
        this.state = {
          url: 'http://localhost:5000/friends',
          friendList: [],
          currentFriend: {}
        };
      }

      componentDidMount() {
        axios
          .get("http://localhost:5000/friends")
          .then(response => {
            console.log(response);
            this.setState({ friendList: response.data });
          })
    
          .catch(err => {
            console.log(err);
          });
      }
    
      addNewFriend = data => {
        {
          axios
            .post("http://localhost:5000/friends", data)
            .then(response => {
              console.log(response);
              this.setState({
                friendList: response.data
              });
            })
            .catch(err => console.log(err));
        }
      };
    
      //lets try deleting something
      deleteFriend = id => {
        axios.delete(`${this.state.url}/${id}`)
        .then(response => {
          this.setState({
            friendList: response.data
          })
        })
        .catch(err => console.log(err));
      }


      editFriend = data => {
        
        this.setState({
          currentFriend: data
        }) 

      }







      updateFriend = (id, editData )=> {
        axios.put(`${this.state.url}/${id}`, editData)
        .then(response => {
          this.setState({
            friendList:response.data,
            currentFriend: {} 
          })
          

        })
        .catch(err => console.log(err));
      }

  render() {

    return (
      <div className="FriendsList">
        <FriendsForm addNewFriend={this.addNewFriend} updateFriend={this.updateFriend} currentFriend={this.state.currentFriend}/>
        
        {this.state.friendList.map(friend => (
          <Friends key={friend.id} friends={friend} deleteFriend={this.deleteFriend} editFriend={this.editFriend}/>

        ))}
        
      </div>
    );
  }
}

export default FriendsList;