import React from 'react';
import Friend from './Friend'
import PropTypes from 'prop-types';

function FriendList(props){
    if(props.friends.length<1){
        return(<h1>No Data! Go get some friends.</h1>)
    }
    return(
        <div>
            {props.friends.map(friend=><Friend friend={friend} key={friend.id}/>)}
        </div>
    );
}

FriendList.propTypes = {
    friend: PropTypes.object,
};

export default FriendList;