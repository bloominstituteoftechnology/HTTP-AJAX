import React from "react";

import Friend from "./friends";

export default  props => {
    return (
        <div>
            {props.friends.map((friend) => {
                return <Friend id={friend.id} age={friend.age} name={friend.name} email={friend.email} key={friend.id} />;
            })}
        </div>
    );
};
