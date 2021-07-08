import React, { Component } from 'react';

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.friend.name,
      id: this.props.friend.id,
      age: this.props.friend.age,
      email: this.props.friend.email,
      removeHandler: this.props.removeHandler
    }
  }

  render() {
    return (
      <li className="friend-card" key={this.state.id}>
      <div><p><strong>Name: </strong> {this.state.name}<br/> <strong>id: </strong>{this.state.id}<br/> <strong>Age: </strong>{this.state.age}<br/> <strong>Email: </strong>{this.state.email}<br/></p></div>
      <span onClick={() => this.state.removeHandler(this.state.id)}>X</span></li>
    );
  }
}

export default FriendCard;
