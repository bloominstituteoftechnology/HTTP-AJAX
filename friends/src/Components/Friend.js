import React from 'react';
import './friend.css'


const Friend = props =>{
    return(
        <div className='wrapperDiv'>
            <button onClick={props.handleUpdateFriend} id={props.data.id}>Update</button>
            <p>{props.data.id} {props.data.name} {props.data.age} {props.data.email}</p> 
            <button onClick={props.handleDeleteFriend} id={props.data.id}>Delete</button>
        </div>
    )
}

export default Friend