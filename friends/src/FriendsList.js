import React from 'react';

const FriendsList = props => {
    let friendList = [];
    if (props.friendProp.friends.length > 0) {
        friendList = props.friendProp.friends;
    }
        return (
            <div>
                {friendList.map( item => {
                    return (
                        <div className="friendCard">
                        {item.id + ' '}
                        {item.name + ' '}
                        {item.age + ' '}
                        {item.email + ' '}
                        </div>
                    );
                })}
            </div>
        )
    }


export default FriendsList;