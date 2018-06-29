import React, { Fragment } from "react";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";
import styled from "styled-components";

const Spacer = styled.div`
  height: 10vh;
`;

const BottomSpacer = styled.div`
  height: 30vh;
`;

const FriendsHeaderWrapper = styled.div`
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Friends = props => {
  // console.log("FRIENDS PROPS: ", props);
  return (
    <Fragment>
      <FriendsHeaderWrapper>
        <h2>Friends</h2>
      </FriendsHeaderWrapper>

      <div className="card-container">
        {props.data.map(props => {
          return <Friend friend={props} key={props.id} />;
        })}
      </div>
      <Spacer />
      <div>
        <AddFriendForm
          newTextHandler={props.newTextHandler}
          handleSubmit={props.handleSubmit}
        />
      </div>
      <BottomSpacer />
    </Fragment>
  );
};

export default Friends;
