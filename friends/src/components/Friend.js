import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledFriend = styled.div`
  margin: 5px auto;
  max-width: 50%;
  background-color: #2b2b2e;
  color: white;
  border: 1px solid black;
  border-radius: 4px;
  text-align: left;

  h2,
  h3 {
    padding-right: 20px;
  }
`;

const UpdateButton = styled.button`
background-color: #bbbbbb;
color: black;
padding: 10px;
border-radius: 3px;
`;

const Friend = props => {
  //console.log(props);
  //let friend;
  //console.log(props.friends.find(f => `${f.id}` === props.match.params.id))
  //if (props.edit) {
    //friend = props.friends.find(f => `${f.id}` === props.match.params.id);
  //} else {
    //friend = props.friend;
  //}
  const friend = props.friend
  return (
    <StyledFriend>
      <div>
        <h2>{friend.name}</h2>
      </div>
      <div>
        <h3>{friend.age} years old</h3>
      </div>
      <div>
        <h3>{friend.email}</h3>
      </div>
      <Link to={`/update/${friend.id}`}><UpdateButton>Update</UpdateButton></Link>
      <UpdateButton onClick={() => props.deleteFriend(friend.id)}>Unfriend</UpdateButton>
    </StyledFriend>
  );
};

export default Friend;
