import React, { Component } from 'react';
import '../App.css';
import axios from "axios";

/* const FriendsList = props => { */

  class FriendsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: [],
        name: null,
        age: null,
        id: null,
        email: null,
        selected: null,
        highLight: null,
        keyIndex: null,
        formClass: null,
        currentFriend: []
      };
    


    }
    componentDidMount() {
      this.setState(() => ({ friends: this.props.friends })); 
     
   }
  
   clickHandler = selected => {  
    
    this.setState({ keyIndex: selected });

   }

  render() {
    let classNames = require('classnames');
    let highLight = false;

    if (this.state.selected) {
      this.setState = ({ highLight: true })
    };

    let formClass = classNames({
      'friend-list': true,
      'friend-selected': highLight
    })
  
    return (
    
    <div className={formClass} onClick={() => this.clickHandler(this.props.id)} >
        <h4  className="header friend-header">{this.props.name}</h4>
        <ol className="friend-data">
          <li>Name: {this.props.name}</li>
          <li>Age: {this.props.age}</li>
          <li>Email: {this.props.email}</li>
          <li>Index: {this.props.id}</li>
        </ol> 
        <p className="delete"  onClick={() => this.props.deleteHandler(this.props.id)}>X</p> 
    </div>
  );
}
  }

export default FriendsList;