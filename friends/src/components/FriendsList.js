import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

export default class FriendList extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div className="friends-list">
                {this.props.friends.map(friend => (
                    <Link key={friend.id} to={`friends/${friend.id}`}>
                        <Friend friend={friend} name={friend.name} email={friend.email} age={friend.age}/>
                    </Link>
                ))}
            </div>
        )
    }
    
}
