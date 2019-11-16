import React from "react";
import Friends from "./Friends";

const FriendsList = props => {
  // console.log("FRIENDS LIST PROPS: ", props);
  return (
    <div>
      <Friends
        data={props.f}
        newTextHandler={props.newTextHandler}
        handleSubmit={props.handleSubmit}
      />
      {/*<Route path={"/friends"} component={AddFriendForm} />*/}
    </div>
  );
};

export default FriendsList;
