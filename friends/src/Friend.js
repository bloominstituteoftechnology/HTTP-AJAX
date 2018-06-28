import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

const FriendCard = styled(Card)`
  width: 300px;
  margin-left: 40%;
  margin-bottom: 5px;
`;
class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleDelClick = id => {
    console.log('clicked', id);
    this.props.deleteHandler(id);
  };

  handleEditClick = id => {
    console.log('clicked', id);
    this.setState({ modal: !this.state.modal });
    // this.props.deleteHandler(id);
  };

  render() {
    return (
      <div>
        <FriendCard>
          <Card body style={{ backgroundColor: 'aliceblue' }}>
            <CardTitle className="text-center">
              {this.props.friend.name}
            </CardTitle>
            <CardText>Age: {this.props.friend.age}</CardText>
            <CardText>email: {this.props.friend.email}</CardText>
            <span>
              <Button
                style={{ width: '70px' }}
                onClick={() => this.handleEditClick(this.props.friend.id)}
                className="btn btn-outline-primary float-leftt"
              >
                edit
              </Button>
              <Button
                style={{ width: '70px' }}
                onClick={() => this.handleDelClick(this.props.friend.id)}
                className="btn btn-outline-danger float-right"
              >
                delete
              </Button>
            </span>
          </Card>
        </FriendCard>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit Friend</ModalHeader>
            <ModalBody>
              <p>Name: {this.props.friend.name}</p>
              <p>Age: {this.props.friend.age}</p>
              <p>email: {this.props.friend.email}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Friend;
