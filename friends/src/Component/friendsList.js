import React from "react";
import { NavLink} from "react-router-dom";



 const FriendList = (props) =>{
    return (
      <div>
        <h1>FriendList</h1>
        <NavLink to="/add">Add Friend</NavLink>
        {props.data && props.data.map(friend => {
          return (
            <div key={`${friend.id}${friend.name}`}>
              <NavLink to={`/${friend.id}`}>{friend.name}</NavLink>
              <NavLink to={`/${friend.id}/update`}>
                Update Friend
              </NavLink>
              <button onClick={() => props.delete(friend.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );

}
export default FriendList;