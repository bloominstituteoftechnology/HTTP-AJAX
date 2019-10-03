import React from 'react'
import Friend from "./Friend";

const Friends = (props) => {
    return (
        <div className='friends'>
            {props.data.map(friend => {
                return <Friend handleChange2={props.handleChange2} data={friend} key={friend.id} editFriend={props.editFriend} deleteFriend={props.deleteFriend}/>
            })
            }
        </div>
    )
}

export default Friends