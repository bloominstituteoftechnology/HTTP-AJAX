import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const FriendStyle = styled.div`
  border: 1px solid gray;
  width: 250px;
  margin-bottom: 5px;
`;

const Friend = props => {
  return (
    <Container>
      <NavLink to={`/friends/${props.friend.id}`}>
        <FriendStyle>
          <h3>Name: {props.friend.name}</h3>
          <h4>Age: {props.friend.age}</h4>
          <h5>Email: {props.friend.email}</h5>
        </FriendStyle>
      </NavLink>
    </Container>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  }),
};

export default Friend;
