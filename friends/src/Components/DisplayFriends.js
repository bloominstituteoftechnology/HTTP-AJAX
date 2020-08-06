import React from "react";
import axios from "axios"
import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";
import UpdateFriend from "./UpdateFriend";

//Display Friends displays the current friends from the server to the screen
export default class DisplayFriends extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: 18,
        email: "",
      }
    }
  }

//fetches original friends from server
  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

//handle input handles all form boxes and updates the new friend's information
  handleInput = (event) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    })
  }

//adds new friend to the friend server and resets newFriend values
  addFriend = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => {
        this.setState({
          friends: response.data,
          newFriend: {
            name: "",
            age: 18,
            email: "",
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

//deletes friend from server
  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data,
          newFriend: {
            name: "",
            age: 18,
            email: "",
          }
        })
      })
      .catch(err => console.log(err))
  }

  updateFriend = (id, name, age, email) => {
    axios
    .put(`http://localhost:5000/friends/${id}`, {
          name: name,
          age: age,
          email: email,
    })
    .then(response => {
       this.setState({friends: response.data})
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div className="display">
        <h1>Here are my friends!</h1>
        {this.state.friends.map(friend => {
            return (<div key={friend.id}>
                <FriendsList friend={friend} 
                  delete={this.deleteFriend}
                  url={this.props.match.url}
                />
              </div>)
        })}
        <FriendForm 
          add={this.addFriend}
          input={this.handleInput}
          value={this.state.newFriend}
        />
        <UpdateFriend 
          friends={this.state.friends}
          update={this.updateFriend}
        />
      </div>
    )
  }
}