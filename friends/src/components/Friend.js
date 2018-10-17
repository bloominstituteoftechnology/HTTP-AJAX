import React from 'react';

const Friend = ({friend, updateFriend, deleteFriend}) => {
    return (
        <div className="container">
            <div className="friend">
                <div className="info">
                    <div>
                        <span>Name: </span>
                        <span>{friend.name}</span>
                    </div>
                    <div>
                        <span>Age: </span>
                        <span>{friend.age}</span>
                    </div>
                    <div>
                        <span>Email: </span>
                        <span>{friend.email}</span>
                    </div>
                </div>
                <div className="friend-actions">
                    <i className="fas fa-edit" onClick={() => updateFriend(friend)} />
                    <i className="fas fa-trash" onClick={() => deleteFriend(friend.id)} />
                </div>
            </div>
        </div>
    );
}

export default Friend;
