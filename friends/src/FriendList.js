import React from 'react'
import Friend from './Friend'
import { Link, Redirect, NavLink } from 'react-router-dom'

const FriendList = (props) => {
    return (
        <div>
            {props.friends.map((friend) => {
                return (
                    <div key={Math.random() * 25}>
                        <Friend
                            key={Math.random() * 20}
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}
                            id={friend.id}
                        />
                        <button key={Math.random() * 40 + 2} id={friend.id} onClick={props.updateFriendForm}>Update</button>
                        <button key={Math.random() * 30 + 1} id={friend.id} onClick={props.deleteFriend}>Delete</button>
                    </div>
                )
            })}
           <Link to="/addfriend" style={{position: "absolute", bottom: '5%', left: '47%'}}><button onClick={props.backToAdd}>Add A Friend</button></Link>
        </div>
    )
}

export default FriendList
