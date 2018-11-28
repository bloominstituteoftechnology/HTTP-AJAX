import React, { Component } from "react";
import axios from "axios";

export default class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends/")
      .then(res => {
        console.log(res.data);
        this.setState({
          friendsData: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div>test</div>;
  }
}
