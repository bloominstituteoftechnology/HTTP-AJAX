import React from 'react';
import styled from 'styled-components';


//styles

const Mastr = styled.div`
display: flex;
flex-direction: column;
align-content: center;
border: solid grey 5px;
width: 400px;
margin: 5px auto;
`

const P = styled.p `
border: solid black 2px;
text-align: center;
margin: 2% 2%;
width: 5%;
border-radius: 100px;
`
const H = styled.h1 `
margin 0 auto;
`
//styles end

const Friend = ({friend})=>{return(

    <Mastr>
        <P>{friend.id}</P>
        <H>{friend.name} ({friend.age})</H>
        <p>
            <a href="/">{friend.email}</a>
        </p>
    </Mastr>
    
)};
export default Friend;