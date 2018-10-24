import React from 'react';

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
            {props.update ? <div>Update</div> : null}
            {props.delete ? <div>Delete</div> : null}
        </div>
    )
}

export default FriendCard;