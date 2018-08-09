import React from 'react';


const Friends = props => {

    return(
        <div className="friends">
             {props.friend.map(friend => <Friends  key={friend.id} friend={friend}/>)}
        </div>
        );
}

export default Friends

