import React from 'react';

const FriendsList = props => {

    return (
            <div>
            {props.friends.map((friends, i) => {
                return (

                    <div>
                        <p key= {i+1} >{friends.name}</p>
                    </div>
                       
                    )}
            )} 

            <h2>Add Friend</h2>
            </div>
    );

};


export default FriendsList;
