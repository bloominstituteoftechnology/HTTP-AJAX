import React from 'react';

const FriendCard = props  => {
    return(
        <div>
            {props.boo.map( (item) => (
                <div key = {item.id}> 
                    {item.name}
                </div>
            ) )}
        </div>
    )
}

export default FriendCard;