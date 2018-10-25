import React from 'react';
import {Link} from 'react-router-dom';

import DeleteFriend from './DeleteFriend';

const FriendCard = (props)=>{
    // This allows displays while App reloads data from server
    if(props.friend === undefined){
        return <div>Loading friend data...</div>;
    }
    return (
        <div>
            {/* TODO: change to link and allow update delete when selected */}
            <div>{props.friend.name}</div>
            <div>{props.friend.age}</div>
            <div>{props.friend.email}</div>
            {/* TODO: this should only render when individual friend has been selected */}
            {props.update ? <Link to={`/${props.friend.id}/update`}>Update</Link> : null}
            {props.delete ? <DeleteFriend id={props.friend.id} deleteFriend={props.deleteFriend}/> : null}
        </div>
    )
}

export default FriendCard;