import React from 'react';


function friendsList (props) {
    return (
        <div className="characters-list-wrapper" >
        {props.friendsList.map(friend => 
            <div key={friend.id} className="character-card" >
                <h3 onClick={() => props.history.push(`/friends/${friend.id}/info`)}
                >
                {friend.name} 
                </h3>
                
            </div>)}
        </div>
    );  
}

export default friendsList;

// Friend.propTypes = {
//     friend.PropTypes.arrayOf(),
// }