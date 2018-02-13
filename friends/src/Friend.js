import React from 'react';

class Friend extends React.Component {
    state = {
      name: '',
      age: '',
      email: '',
      editing: false,
    };
    render() {
        return (
            <ul className="friends-container">
                {this.props.friends.map(friend => {
                    return (
                        <li key={friend.id} className="friend">
                            <div className="friend-name">{friend.name}</div>
                            <div className="friend-age"> {friend.age}</div>
                            <div className="friend-email"> {friend.email}</div>
                            <button
                                onClick={() => {
                                    this.props.deleteFriend(friend.id);
                                }}
                            >
                                Unfriend
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Friend;
