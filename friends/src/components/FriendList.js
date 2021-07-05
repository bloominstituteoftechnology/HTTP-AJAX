import React from 'react';
import Friend from './Friend'
import PropTypes from 'prop-types';

function FriendList(props){
    if(props.friends.length<1){
        return(<h1>No Data! Go get some friends.</h1>)
    }
    return(
        <div>
            {props.friends.map((friend,index)=><Friend friend={friend} key={index}/>)}
        </div>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
    friend: PropTypes.object,
};

export default FriendList;