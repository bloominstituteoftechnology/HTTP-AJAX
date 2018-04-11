import React, { Component } from "react";
// import axios from 'axios';

//should display a list of friends
//might format into a card form later with a card component

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

//grabs the data from server
// componentDidMount() {
//   axios
//   .get(`http://localhost:5000/friends/`)
//   .then(response => {
//     this.setState({ friends: response.data});
//   })
//   .catch(err => {
//     console.log(err);
//   });
// }


export default FriendList;