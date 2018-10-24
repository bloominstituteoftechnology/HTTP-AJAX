import React from "react";
import axios from "axios"
import FriendForm from "./FriendForm";

//Display Friends displays the current friends from the server to the screen
export default class DisplayFriends extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      friends: [],
      newFriend: {
        id: 3,
        name: "",
        age: 18,
        email: "",
      }
    }
  }

//handle input handles all form boxes and updates the new friend's information
  handleInput = (event) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        id: this.state.friends.length + 1,
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
        console.log(response)
        this.setState({
          newFriend: {
            id: 3,
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

  render(){
    //console.log(this.state)
    return(
        <div className="display">
          <h1>Here are my friends!</h1>
          {this.state.friends.map(friend => {
              return (<div key={friend.id}>
                  {friend.id}. {friend.name} {friend.age} {friend.email}
                </div>)
          })}
          <FriendForm 
            friends={this.state.friends}
            add={this.addFriend}
            input={this.handleInput}
            value={this.state.newFriend}
          />
        </div>
    )
  }
}