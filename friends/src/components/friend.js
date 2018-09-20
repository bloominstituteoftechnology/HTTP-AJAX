import React, {Fragment} from 'react';


function Friend(props) {
    // console.log(props);
    const friend = props.friends.find(
      friend => `${friend.id}` === props.match.params.id
    );
    return(
        <Fragment>
            <h1>{friend.age}</h1>
        </Fragment>
    )

}
export default Friend;