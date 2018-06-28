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
    this.props.deleteHandler(id);
  };

  handleEditClick = id => {
    this.props.editHandler(id);
  };

  handleCardClick = id => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <FriendCard onClick={this.handleCardClick}>
          <Card body style={{ backgroundColor: 'aliceblue' }}>
            <CardTitle className="text-center">
              {this.props.friend.name}
            </CardTitle>
            <CardText>Age: {this.props.friend.age}</CardText>
            <CardText>email: {this.props.friend.email}</CardText>
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
              <span>
                <Button
                  style={{ width: '70px', marginLeft: '-399px' }}
                  onClick={() => this.handleEditClick(this.props.friend.id)}
                  className="btn btn-outline-primary float-left"
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
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Friend;
