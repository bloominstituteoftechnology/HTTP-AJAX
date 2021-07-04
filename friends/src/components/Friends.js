import React from 'react';

const Friends = (props) => {
    return ( 
        <div>
        {props.friends.map((item, index) => {
            return <ul key={index}>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.email}</li>
            </ul>
        })}
        </div>
     );
}
 
export default Friends;