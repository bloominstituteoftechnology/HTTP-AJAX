import React from 'react';
import './friend.css'
import { Link } from 'react-router-dom';


const Friend = props =>{
    return(
        <div className='wrapperDiv'>
            <p>{props.data.name}</p> 
            <Link to={`/friends/${props.data.id}`}><button className='btn' onClick={event => props.handleViewFriendClick(event, props.data.id)}>View</button></Link>
            <button className='btn' onClick={event=> props.handleUpdateFriend(event,props.data.id)}>Update</button>
            <button className='btn' onClick={event=> props.handleDeleteFriend(event,props.data.id)}>Delete</button>
        </div>
    )
}

export default Friend