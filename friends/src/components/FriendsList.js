import React, {Fragment} from 'react';
import Friend from './Friend';

const FriendsList = props => {
    return (
        <Fragment>
            {props.friendsData.map((friend, index) => {
                return (
                    <Friend
                        key={index}
                        index={index}
                        friend={friend}
                        handleDelete={props.handleDelete}
                        handleUpdate={props.handleUpdate}    
                    />
                );
            })}
        </Fragment>
    );
}

export default FriendsList;