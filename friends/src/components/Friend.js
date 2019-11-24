import React, {Component} from 'react';
import axios from 'axios';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: props.friend.name,
      age: props.friend.age,
      email: props.friend.email,
      id: props.friend.id
    }
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends:response.data })
      })
      .catch(error => console.log(error));
  }
  
  render() {
    return (
      <div>
  
      <div><strong>{this.state.name}</strong></div>
      <div><em>{this.state.age}</em></div>
      <div>{this.state.email}</div>
      <button onClick={() => this.state.deleteFriend(`${this.state.id}`)}>delete</button>
      <br></br>
      <br></br>
      
      </div>
    )
  }

}

export default Friend;