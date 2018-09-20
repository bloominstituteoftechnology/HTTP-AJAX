import React from 'react';
import {NavLink} from 'react-router-dom';


function friendsList (props) {
    return (
        
        <div className="characters-list-wrapper" >
        {props.friendsList.map(friend => (
           <NavLink key={friend.id} to={`/friends/${friend.id}/info`}> 
               <div key={friend.id} className="character-card" >
                    <h3>
                        {friend.name} 
                    </h3>
                </div>

        </NavLink> ))} 
        </div>
    );  
}

export default friendsList;

// Friend.propTypes = {
//     friend.PropTypes.arrayOf(),
// }