import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import styled from 'styled-components';

const FriendCard = styled(Card)`
  width: 300px;
  margin-left: 40%;
  margin-bottom: 5px;
`;

const Friend = props => {
  const handleDelClick = id => {
    console.log('clicked', id);
    props.deleteHandler(id);
  };
  return (
    <FriendCard>
      <Card body style={{ backgroundColor: 'aliceblue' }}>
        <CardTitle className="text-center">{props.friend.name}</CardTitle>
        <CardText>Age: {props.friend.age}</CardText>
        <CardText>email: {props.friend.email}</CardText>
        <Button
          onClick={() => handleDelClick(props.friend.id)}
          className="btn btn-outline-danger float-right"
        >
          delete friend
        </Button>
      </Card>
    </FriendCard>
  );
};

export default Friend;
