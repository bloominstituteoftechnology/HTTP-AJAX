import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Collapse, CardBody } from 'reactstrap';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.friend,
      collapse: false
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="col-4 friend">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="Card">
          <CardTitle>{this.state.friend.name}</CardTitle>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>More...</Button>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              Age: {this.state.friend.age}
            </CardBody>
            <CardBody>
              email: {this.state.friend.email}
            </CardBody>
            <CardBody>
              id: {this.state.friend.id}
            </CardBody>
          </Collapse>
        </Card>
      </div>
    )
  }
}

export default Display;
