import React from 'react'
import Friend from './Friend'
import { Link } from 'react-router-dom'

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
                        <Link to='/updatefriend'><button key={Math.random() * 40 + 2} id={friend.id}>Update</button></Link>
                        <Link to='/'><button key={Math.random() * 30 + 1} id={friend.id} onClick={props.deleteFriend}>Delete</button></Link>
                    </div>
                )
            })}
           <Link to="/addfriend" style={{position: 'relative', marginRight: 'auto'}}><button>Add A Friend</button></Link>
        </div>
    )
}

export default FriendList
