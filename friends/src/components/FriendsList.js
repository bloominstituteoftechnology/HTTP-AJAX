import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap/lib/Alert';

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      this.setState(() => ({friends: response.data}));

    }).catch(error => {
      console.error('Server Error', error);
    });
  }

  render() {
    return (<div className="movie-list">


      {this.state.friends.map(friend => (<FriendDetails key={friend.email} friend={friend}/>))}

    </div>);
  }
}

function FriendDetails({friend}) {
  const {name, age, email} = friend;
  return (<div className="friend-card">
    <h2>{name}</h2 >
    <div className="friend-age">
      Age:
      <em>{age}</em>
    </div>
    <div className="friend-email">
      email:
      <em>{email}</em>
    </div>

  </div>);
}
