import React from 'react';


//Passed as props from App.js
// friend={props.friends}

const Card = props => {
    return (
        <div className="card">
        
            <div key={props.friend.id} className="card">
              <ul>
                <li>{props.friend.name}</li>
                <li>{props.friend.age}</li>
                <li>{props.friend.email}</li>
              </ul>
            </div>
        </div>
    )
}

export default Card