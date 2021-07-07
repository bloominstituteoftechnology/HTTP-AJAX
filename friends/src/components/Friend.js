import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Friend extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="friend" >
      <div className='card' onClick={() => {
        
        this.props.startUpdate(this.props.friend)
        this.props.history.push('/friendform')
        
        }}>
        <h1>{this.props.friend.name}</h1>
        <div className='info'>
          <div>
            <h4>Age</h4>
            <p>{this.props.friend.age}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{this.props.friend.email}</p>
          </div>
        </div>
      </div>
      <button onClick={() => this.props.deleteItem(this.props.friend.id)}>X</button>
      </div>
    );
  }
}