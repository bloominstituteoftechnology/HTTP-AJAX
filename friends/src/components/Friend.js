import React, {Fragment} from 'react';

const Friend = props => {
    return (
        <Fragment>
            <p>{props.friend.name}</p>
        </Fragment>
    );
}

export default Friend;