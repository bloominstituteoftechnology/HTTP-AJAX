import React, { Component } from 'react';
import './FriendsDisplay.css'

class FriendsDisplay extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  
  render() {
    return (
      <div className="friends">
        <div>Name: {this.props.friend.name}</div>
        <br/>
        <div>Age: {this.props.friend.age}</div>
        <p>Email: {this.props.friend.email}</p>
        <br/>
        <button onClick={this.props.edit}>Edit</button>
        <br/>
        <button onClick={this.props.delete}>Delete</button>
      </div>
    );
  }
}

export default FriendsDisplay;