import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DeleteFriend from './DeleteFriend';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    margin: 15px auto;
    box-shadow: 2px 2px 5px #999999;
    border: 1px solid darkgray;
    padding: 15px 0;
    font-size: 1.8rem;

    ${(props)=> props.pointer ? `cursor: pointer;` : `cursor: default;`}

    div{
        padding: 5px 0;
    }
`;

const CardLinks = styled.div`
    ${(props)=> props.updatedelete ? `display: flex;` : `display: none;`}
    justify-content: space-between;
    width: 60%;
    margin: 10px 0;
    
    a{
        text-decoration: none;
        color: white;
        background-color: mediumslateblue;
        padding: 8px;
        border: 2px solid white;
        border-radius: 8px;

        &:hover{
            color: mediumslateblue;
            background-color: white;
            border: 2px solid mediumslateblue;
        }
    }
`;


const FriendCard = (props)=>{
    // This allows displays while App reloads data from server
    if(props.friend === undefined){
        return <div>Loading friend data...</div>;
    }

    return (
        <CardContainer pointer={props.pointer}>
            <div>{props.friend.name}</div>
            <div>{props.friend.age}</div>
            <div>{props.friend.email}</div>
            <CardLinks updatedelete={props.updatedelete}>
                <Link to={`/${props.friend.id}/update`}>Update</Link>
                <DeleteFriend id={props.friend.id} deleteFriend={props.deleteFriend}/>
            </CardLinks>
        </CardContainer>
    )
}

export default FriendCard;