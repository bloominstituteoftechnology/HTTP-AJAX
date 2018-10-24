import React from 'react'
import {List, Container, Paragraph} from './Styled-Components'

const FriendsList = props => {
    return (
      <Container>
        {props.data.map(friend => {
          return (
            <List>
              <h1>Name: {friend.name}</h1>
              <Paragraph>Age: {friend.age}</Paragraph>
              <Paragraph>Email: {friend.email}</Paragraph>
            </List>
          );
        })}
      </Container>
    );
  };
   export default FriendsList;