import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import Friend from './Friend';
import styled from 'styled-components';

const FriendsWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 75%;
`

export default function FriendsList(props) {
  if (props.loading) {
    return <h2>Loading data..</h2>;
  } else if (!props.loading && props.friends.length === 0) {
    return <h2>No data here, try again</h2>;
  }

  return (
    <Fragment>
    <FriendsWrapper>
      {props.friends.map((friend, i) => (
        <div key={i}>
          <Friend friend={friend} updateFriend={(friend) => props.updateFriend(friend)} deleteFriend={(id) => props.deleteFriend(id)}/>
        </div>
      ))}
      </FriendsWrapper>
     {!props.add && 
     <Link to="/add">
        <button onClick={props.handleShowAdd}>Add Friend?</button>
      </Link> 
     }
    </Fragment>
  );
}
