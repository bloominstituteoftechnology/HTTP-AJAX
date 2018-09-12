import React from "react";
import axios from "axios";

import "../../App.css";

class Friend extends React.Component {
  state = {
    friend: null
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ friend: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <h1>{this.state.friend.name}</h1>
        <h3>{this.state.friend.age}</h3>
        <h3>{this.state.friend.email}</h3>
      </div>
    );
  }
}

export default Friend;
