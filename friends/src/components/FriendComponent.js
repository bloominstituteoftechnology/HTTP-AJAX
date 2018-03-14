import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Button
} from "reactstrap";
import FormComponent from "./FormComponent";

class FriendComponent extends Component {
  constructor() {
    super();
    this.state = {
      friend: {},
      showEdit: false
    };
  }
  componentDidMount() {
    this.setState({ friend: this.props.friend });
  }
  render() {
    return (
      <Card className="my-1">
        {this.state.showEdit ? (
          <CardBody>
            <FormComponent
              handleChange={this.props.handleChange}
              submit={() => this.props.editFriend(this.state.friend.id)}
              newFriend={this.props.newFriend}
            />
          </CardBody>
        ) : (
          <div>
            <CardBody>
              <Row>
                <Col sm={8}>
                  <CardTitle>{this.state.friend.name}</CardTitle>
                </Col>
              </Row>
              <CardText>Age: {this.state.friend.age}</CardText>
              <CardText>E-Mail: {this.state.friend.email}</CardText>
            </CardBody>
            <CardBody>
              <Button
                className="m-1"
                onClick={() => {
                  this.props.retrieveFriend(this.state.friend.id);
                  this.setState({ showEdit: !this.state.showEdit });
                }}
              >
                Edit
              </Button>
              <Button
                className="m-1"
                onClick={() => {
                  this.props.removeFriend(this.state.friend.id);
                }}
              >
                Remove
              </Button>
            </CardBody>
          </div>
        )}
      </Card>
    );
  }
}

export default FriendComponent;
