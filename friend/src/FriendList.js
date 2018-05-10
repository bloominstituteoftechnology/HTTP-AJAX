import React from 'react';

const FriendRemove = props => {
    const remove = obj => {
        props.removeFriend(obj.id);
    }
    return (
        <div>
            {props.friendArray.map(mapItem => {
                return (
                    <div key={mapItem.id}>{mapItem.title}
                    <button onClick={() => {
                        remove(mapItem);
                    }} >
                    Complete
                    </button>
                    </div>
                )
            })}
        </div>
    )
};
export default FriendRemove;
