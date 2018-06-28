import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
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

  handleDelClick = id => {
    console.log('clicked', id);
    this.props.deleteHandler(id);
  };

  handleEditClick = id => {
    console.log('clicked', id);
    // this.props.deleteHandler(id);
  };

  render() {
    return (
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
    );
  }
}

export default Friend;
