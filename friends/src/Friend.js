import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Number } from 'core-js/library/web/timers';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      age: this.props.age,
      email: this.props.email
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      age: this.props.age,
      email: this.props.email
    });
  }

  delete() {
    axios.delete('http://localhost:5000/friends/:id', { })
    .then( (response) => { this.setState({ response }) })
  }

  render() {
    return (
        <div>
                <li key={this.props.id} className="friend">
                  <div className="friend-name">{`Name: ${this.props.friend.name}`}</div>
                  <div className="friend-age">{`Age: ${this.props.friend.age}`}</div>
                  <div className="friend-email">{`Email: ${this.props.friend.email}`}</div>
                </li>
                <button onClick={this.delete}>Delete</button>
                <button>Update</button>
        </div>
    )}
}



export default Friend;
