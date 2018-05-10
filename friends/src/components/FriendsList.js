import React, { Component } from 'react'
import axios from 'axios';
export default class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friend: [],
      // name: "",
      // id: null,
      // age: null,
      // email: "",
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({friend: response.data}))
    .catch( error => console.log(`${error}`))
  }

  render() {
    return(
      <div>
      <ul>
        {this.state.friend.map((data, id) => {
          return(
            <li key={id}>
            {data.name}
            {data.email}
            {}
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
}