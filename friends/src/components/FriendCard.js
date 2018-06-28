import React from 'react';
import {Link} from 'react-router-dom';


const FriendCard = props => {
    const friend = props.friend;
        return (
            <div>
                <Link to={"friends/" + friend.id}>
                    {friend.name}<br />
                    {friend.age}
                </Link>
            </div>
        );
}

export default FriendCard;