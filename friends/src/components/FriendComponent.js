import React, { Component } from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

class FriendComponent extends Component {
  constructor() {
    super();
    this.state = {
      friend: {}
    };
  }
  componentDidMount() {
    this.setState({ friend: this.props.friend });
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.state.friend.name}</CardTitle>
          <CardText>Age: {this.state.friend.age}</CardText>
          <CardText>E-Mail: {this.state.friend.email}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default FriendComponent;
