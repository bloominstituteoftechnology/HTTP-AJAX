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
      <div>
        {this.state.showEdit ? (
          <Card className="m-3">
            <CardBody>
              <FormComponent
                handleChange={this.props.handleChange}
                submit={() => this.props.editFriend(this.state.friend.id)}
                newFriend={this.props.newFriend}
              />
            </CardBody>
          </Card>
        ) : (
          <Card className="m-3 ">
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
                  console.log("Clicked Edit: ", this.state.friend.id);
                  this.setState({ showEdit: !this.state.showEdit });
                  this.props.retrieveFriend(this.state.friend.id);
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
          </Card>
        )}
      </div>
    );
  }
}

export default FriendComponent;
