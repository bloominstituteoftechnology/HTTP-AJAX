import React, { Component } from 'react';

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
            </div>
    );

};


export default FriendsList;
