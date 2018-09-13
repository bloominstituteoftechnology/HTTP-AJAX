import React from 'react';

import Friend from './Friend'
import {Route, Link} from 'react-router-dom'

const FriendList = props => {
  if (props.list[0]) {
    // const item = props.list[1]
  return (
     <div className="friend-list">
       {props.list.map(item =>(
         // <Route path='/id:' render={props =>
         <Link to={`/${item.id}`}>
         <Friend item={item}/>
          </Link>
       ))}
   </div>
)} else {return <p> 'loading' </p>}
}

export default FriendList
