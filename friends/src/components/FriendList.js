import React from 'react';

import Friend from './Friend'
import {Link} from 'react-router-dom'

const FriendList = props => {
  if (props.list[0]) {
  return (
     <div className="friend-list">
       {props.list.map(item =>(
          <Link to={`/${item.id}`} key={item.id}>
           <Friend
             item={item}
             deleteIt={props.deleteIt}
             selectFriend={props.selectFriend}
             />
          </Link>
         ))}
     </div>
   )} else {return <p> 'loading' </p>}
  }

export default FriendList
