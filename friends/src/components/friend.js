import React, {Fragment} from 'react';


function Friend(props) {
    console.log(props);
    const friend = props.friends.find(
      friend => `${friend.id}` === props.match.params.id
    );
    return(
        <Fragment>
            <h1>{friend.name}</h1>
            <h3>Age: {friend.age} </h3>
            <h4>Email: {friend.email} </h4>
        </Fragment>
    )

}
export default Friend;