import React, { Fragment } from "react";

import EditDeleteButtons from "../editDeleteButtons/EditDeleteButtons";
import "./Friend.css";

// const IndFriendCard = props => {
//   console.log("IndFriendCard", props.data);
//   return (
//     <div className="individualCard">
//       <h2>{props.match.params.name}</h2>

//       <EditDeleteButtons data={props.data} />
//     </div>
//   );
// };

const IndFriendCard = props => {
  for (let i = 0; i < props.data.length; i++) {
    console.log(props.data[i].name);
    // if (props.data.name[i].includes(props.match.params.name)) {
    //   console.log(
    //     "match occurded at index of ",
    //     props.indexOf(props.match.params.name)
    //   );
    // } else {
    //   // do nothing
    // }
  }
  console.log("IndFriendCardRoute", props.match.params.name);
  return (
    <Fragment>
      {/* <Route
        path={`/friends/${props.friends}`}
        render={props => <IndFriendCard {...props} data={props.data} />}
      /> */}
      {/* {props.data.map(friend => {
        <div className="individualCard">
          <h2>Hey</h2>
          <h3>{friend.name}</h3>

          <EditDeleteButtons data={props.data} />
        </div>;
      })} */}
      <div className="individualCard">
        <h2>Hey</h2>

        <EditDeleteButtons data={props.data} />
      </div>
    </Fragment>
  );
};

export default IndFriendCard;
