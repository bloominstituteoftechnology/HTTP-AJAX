import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';


export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: null
    };
  }


  render() {
        return (
            <div className="card">
                <FriendCard friend={this.state.friend}/>
            </div>
        )
    }
}
