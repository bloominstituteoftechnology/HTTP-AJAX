import React from 'react';
import {Link} from 'react-router-dom';

function FriendCard(props) {
    const index = props.match.params.id;    
    if (props.id === Number(index)) {
        return (
            <div className="card">
                <p>{props.name}</p>
                <p>{props.age}</p>
                <p>{props.email}</p>
                <Link to="/"><button>close</button></Link>
            </div>
        )
    } else {
        return null
    }
    
   
}

export default FriendCard;