import React, { Component } from 'react';
import './App.css';
import FriendDetails from './FriendDetails';



export default class Form extends Component {


    

    render() {
    return (
        <form>
            <h3>Join my Slack Channel!</h3>
        <label>
          Name:
          <input type="text"  />
        </label>
        <label>
          Age:
          <input type="number"  />
        </label>
        <label>
          Email:
          <input type="email"  />
        </label>
        <button type="submit" value="Submit" onChange = {this.handlerChange}>Submit Info</button>
      </form>
    );
  }
}
