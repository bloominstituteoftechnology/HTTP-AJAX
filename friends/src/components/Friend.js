import React, { Component } from 'react';


export default class Friend extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="friend" onClick={() => this.props.startUpdate(this.props.friend)}>
        <p>Name:{this.props.friend.name}</p>
        <p>Age:{this.props.friend.age}</p>
        <p>Email:{this.props.friend.email}</p>
      </div>
    );
  }
}