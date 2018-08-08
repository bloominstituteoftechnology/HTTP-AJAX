import React, { Component } from 'react';
import styled from 'styled-components';
import Friend from './Friend.js';

const AllTheRosses = styled.div`
    width: 620px;
    margin:0 47%;
`;


const FriendList = (props) =>{
    // console.log(props);
    
    return (
        <AllTheRosses>
            {
                props.friends.map((ross) => {
                    // console.log(ross);
                    return <Friend key={ross.id} ross={ross} />
                })
            }
        </AllTheRosses>
    )
        
}

export default FriendList;