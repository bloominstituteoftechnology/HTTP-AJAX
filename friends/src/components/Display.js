import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, Collapse, CardBody } from 'reactstrap';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.friend,
      getFriends: this.props.getFriends,
      collapse: false
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  deleteFriend = friendID => {
    axios
      .delete(`http://localhost:5000/friends/${friendID}`)
      .then(response => {this.props.getFriends2()})
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="col-4 friend">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="Card">
          <CardTitle>{this.state.friend.name}</CardTitle>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>More about {this.state.friend.name}</Button>
          <button onClick={() => this.deleteFriend(this.props.friend.id)}>Delete</button>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              Age: {this.state.friend.age}
            </CardBody>
            <CardBody>
              email: {this.state.friend.email}
            </CardBody>
          </Collapse>
        </Card>
      </div>
    )
  }
}

export default Display;
