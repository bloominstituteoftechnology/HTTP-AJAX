import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendCard from './FriendCard';
import FriendAdd from './FriendAdd';


class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      updateFriend: [],
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

  handleDelete = (friendID) => {
    console.log(friendID)
    axios
      .delete(`http://localhost:5000/friends/${friendID}`)
        .then(response => {
          console.log("delete response:", response)
          this.setState({ friends: response.data })
        })
        .catch(err => {
          console.log("post err:",err)
        }) 
  }

  handleGatherForUpdate = (friendID) => {
    // console.log(friendID,)
    this.setState({updateFriend: friendID })
  }

  handleEditSubmits = (friendID) => {
    console.log("edit Submit id:", friendID)
    axios
      .put(`http://localhost:5000/friends/${friendID.id}`,{
        name: friendID.name,
        age: friendID.age,
        email: friendID.email,
      })
        .then(response => {
          console.log("edit response:", response)
          this.setState({ friends: response.data })
        })
        .catch(err => {
          console.log("edit err:",err)
        })
  }

  render() {
    // console.log('state on friends', this.state)
    return(
      <div>
        <div>
          {/* {this.state.friends.map(friend => (
            <FriendCard key={friend.id} friend={friend}/>
          ))} */}

        <Route exact path="/"render={() => <FriendCard passedFriends={this.state.friends} handleDelete={this.handleDelete} handleGatherForUpdate={this.handleGatherForUpdate}/> }/>
        {/* <FriendCard passedFriends={this.state.friends}/>  */}
        <Route path="/add"render={(props) => <FriendAdd {...props} handleSubmits={this.handleSubmit}/> }/>
        {/* <FriendAdd handleSubmits={this.handleSubmit}/> */}
        <Route path="/edit"render={(props) => <FriendAdd {...props} handleSubmits={this.handleEditSubmits} toUpdate={this.state.updateFriend}/> }/>
        </div>
        
      </div>
    )
  }
}

export default FriendsList;