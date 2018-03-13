import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';

export default class DisplayFriend extends Component {
  render() {
    return(
      <div key={this.props.friend.name}>
            <Card inverse color="primary">
              <CardTitle>{this.props.friend.name}</CardTitle>
              <CardText>{`${this.props.friend.name} is ${this.props.friend.age} years old.`}</CardText>
              <CardText>{`${this.props.friend.name}'s email address is ${this.props.friend.email}.`}</CardText>
            </Card>
          </div>
    )
  }
}