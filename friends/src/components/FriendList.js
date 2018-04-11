import React, { Component } from "react";
import axios from "axios";
import Friend from "./Friend";
// import Friend from "./components/Friend";

class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      //   .then(response => {
      //     console.log(response);
      //   })
      //   fetch data and store it in state
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    //   this.setState({ friends: response.data });
  }

  render() {
    console.log(this.state.friends);
    return (
      <div>
        {this.state.friends.map((friend, index) => (
          //   <div >
          <Friend key={index} friend={friend} />
          //   </div>
        ))}
      </div>
    );
  }
}

export default FriendList;
