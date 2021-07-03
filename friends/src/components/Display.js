import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, Collapse, CardBody } from 'reactstrap';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.friend,
      getFriends: this.props.getFriends,
      showUpdateFriend: false,
      collapse: false,
      name: "",
      age: "",
      email: ""
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  deleteFriend = friendID => {
    axios
      .delete(`http://localhost:5000/friends/${friendID}`)
      .then(response => {this.props.getFriends()})
      .catch(err => console.log(err))
  }

  showUpdateFriend = () => {
    this.setState({ showUpdateFriend: !this.state.showUpdateFriend});
  }

  handleTextChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateFriend = friendId => {
      const temp = {};
      if (this.state.name !== '') {
        temp['name'] = this.state.name;
      }
      if (this.state.age !== '') {
        temp['age'] = this.state.age;
      }
      if (this.state.email !== '') {
        temp['email'] = this.state.email;
      }
      axios
      .put(`http://localhost:5000/friends/${friendId}`, temp)
      .then(response => {
        this.setState({ showUpdateFriend: false, name: '', age: '', email: '' });
        this.props.getFriends();
      })
    }

  render() {
    return (
      <div className="col-4 friend">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="Card">
          <CardTitle>{this.props.friend.name}</CardTitle>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>More about {this.props.friend.name}</Button>
          <Button color="primary" onClick={this.showUpdateFriend}>Update</Button>
          <br/>
          <div className="Buttons">
            <Button color="primary" onClick={() => this.deleteFriend(this.props.friend.id)}>Delete</Button>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              Age: {this.props.friend.age}
            </CardBody>
            <CardBody>
              email: {this.props.friend.email}
            </CardBody>
          </Collapse>
        </Card>
        {this.state.showUpdateFriend ? (
          <div>
            <input type="text" name="name" onChange={this.handleTextChange} value={this.state.name} placeholder="What is your name?" />
            <input type="number" name="age" onChange={this.handleTextChange} value={this.state.age} placeholder="Your Age?" />
            <input type="text" name="email" onChange={this.handleTextChange} value={this.state.email} placeholder="Enter Email" />
            <Button color="primary" onClick={() => this.updateFriend(this.props.friend.id)}>Save Updates</Button>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Display;
