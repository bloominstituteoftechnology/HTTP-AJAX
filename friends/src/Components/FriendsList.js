import React from 'react';

function FriendsList(props) {
    return (
            <div>
                <span>ID: {props.id}</span>
              <span> Name: {props.name}</span>
               <span> Age: {props.age}</span>
               <span> Email: {props.email}</span>
               {/* <button onClick={props.delete}>Delete </button> */}
             </div>
        )
    };
 export default FriendsList;
