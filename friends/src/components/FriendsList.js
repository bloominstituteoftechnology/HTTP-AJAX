import React from 'react';

function FriendsList(props) {
    
    return(        
        <div className="thebestfriendsthatanyonecanhave">{props.children}</div>
    )
}

export default FriendsList;