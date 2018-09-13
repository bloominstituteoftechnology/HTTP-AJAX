import React from 'react';

import Friend from './Friend'
import {Route, Link} from 'react-router-dom'

const FriendList = props => {
  if (props.list[0]) {
    // console.log(props.item)
  return (
     <div className="friend-list">
       {props.list.map(item =>(
         // <Route path='/id:' render={props =>
         <Link to={`/${item.id}`}>
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
