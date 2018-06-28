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
                        name={props.name}
                        age={props.age}
                        email={props.email}
                    />
                );
            })}
        </Fragment>
    );
}

export default FriendsList;