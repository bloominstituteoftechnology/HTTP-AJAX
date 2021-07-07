import React from 'react';
import './FriendsList.css';

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
                        Id: {item.id + ' '} <br/>
                        Name: {item.name + ' '} <br/>
                        Age: {item.age + ' '} <br/>
                        Email: {item.email + ' '}
                        </div>
                    );
                })}
            </div>
        )
    }


export default FriendsList;