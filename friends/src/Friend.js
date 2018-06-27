import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components';

const FriendCard = styled(Card)`
  width: 300px;
  margin-left: 40%;
  margin-bottom: 5px;
`;

const Friend = props => (
  <FriendCard>
    <Card body style={{ backgroundColor: 'aliceblue' }}>
      <CardTitle className="text-center">{props.friend.name}</CardTitle>
      <CardText>Age: {props.friend.age}</CardText>
      <CardText>email: {props.friend.email}</CardText>
    </Card>
  </FriendCard>
);

export default Friend;
