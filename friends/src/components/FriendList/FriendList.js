import React, { Component } from "react";

//should display a list of friends
//might format into a card form later

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };
  }
}

export default FriendList;