import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.2rem;
  text-align: center;
`;

const FriendCard = styled.div`
  border: 1px dashed white;
  margin-bottom: 2rem;
  min-width: 25%;
  width: 265px;
  padding: 1rem;
  background: none;
  position: relative;
`;

const FriendsBox = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Span = styled.span`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.2rem;
  color: red;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1.1);
    top: 14px;
    cursor: pointer;
  }
`;

const AddFriendContainer = styled.div`
  margin-bottom: 1rem;
`;

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null
    };
  }

  render() {
    return (
      <Container>
        <AddFriendContainer>
          <h2>Your Friends:</h2>
          <Link to="/addfriend">
            <button>Add A Friend</button>
          </Link>
        </AddFriendContainer>
        <FriendsBox>
          {this.props.friendsData.map(friend => (
            <FriendCard key={friend.id ? friend.id : Date.now()}>
              <h2>
                Name:&nbsp;&nbsp;
                {friend.name}
                <Span
                  onClick={() => {
                    this.props.deleteFriend(friend.id);
                    this.props.history.push("/friendslist");
                  }}
                >
                  X
                </Span>
              </h2>
              <hr />
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
              <Link to={`/friend-edit/${friend.id}`}>
                <button>Update&nbsp;Friend</button>
              </Link>
            </FriendCard>
          ))}
        </FriendsBox>
      </Container>
    );
  }
}
