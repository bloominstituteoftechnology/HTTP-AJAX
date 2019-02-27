import React from 'react';
import styled from 'styled-components';

const Mastr = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`

const Friend = ({friend})=>{return(
    <Mastr>
        <p>{friend.id}</p>
        <h1>{friend.name} ({friend.age})</h1>
        <p>
            <a href="/">{friend.email}</a>
        </p>
    </Mastr>
)};
export default Friend;