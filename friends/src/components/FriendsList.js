import React from "react";
import axios from "axios";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(response => {
      console.log(response);
      this.setState({friends: response.data});
    });
  };

  render() {
    return (
      <div>
        {this.state.friends.map(friend => {
          return <div>{friend.name}</div>;
        })}
      </div>
    );
  }
}

export default FriendsList;
