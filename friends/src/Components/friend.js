import React from 'react'
import styled from 'styled-components';

const FriendDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    h1{
        font-size: 18px;
        color: red;
    }

`

 const Friend=(props)=>{
return(
    <FriendDiv>
        <h1>{props.item.name} &nbsp;
            <span>Age: {props.item.age}</span> 
        </h1>
        
        <h4>{props.item.email}</h4>
    </FriendDiv>
)
}
export default Friend;