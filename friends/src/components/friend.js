import React from 'react';

function friend (props) {
    return (
        <div className='friend-container' >
        {props.friends.map(friend => 
            <div key={friend.id} className="friend-card" >
                <div>
                {friend.name} 
                </div>
            {friend.age}
            </div>)}
        </div>
    );  
}

export default friend;

// Friend.propTypes = {
//     friend.PropTypes.arrayOf(),
// }