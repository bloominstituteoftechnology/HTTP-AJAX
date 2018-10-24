import React from 'react';
import './Friends.css';


const Friend = (props) => {
    return (
        <tr className="friend-row">
            <td className="friend-name">{props.friend.name}</td>
            <td className="friend-age">{props.friend.age}</td>
            <td className="friend-email">{props.friend.email}</td>
            <td className="friend-controls">&nbsp;</td>
        </tr>
    )
}

export default Friend;