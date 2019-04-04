import React from 'react'
import { Link } from 'react-router-dom'

const FriendList = props => {

    function routeToItem(ev, item) {
        ev.preventDefault();
        props.history.push(`/${item.id}`);
        props.getItemById(item.id)
      }

    return (
        
        <div>
        {props.friends.map(friend => 
            // <Link to={`/${friend.id}`}><div>{friend.name} {friend.age} {friend.email}</div></Link>
            <div
            onClick={ev => routeToItem(ev, friend)}
          className="item-card"
          key={friend.id}>{friend.name} {friend.age} {friend.email}</div>
            )
        }  
        </div>
    )

}

export default FriendList