import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    width: 40%;
    height: 200px;
    margin: 2% auto;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

const Header = Styled.header`
    text-align: center;
    padding: 5%;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    ${Container}:hover & {
        box-shadow: 0 14px 28px rgba(66,133,244,0.25), 0 10px 10px rgba(66,133,244,0.22);
        background: #4285f4;
    }
    
`;

const Div = Styled.div`
    padding: 2%;
    border-top: 1px solid rgba(0,0,0,0.25);
`;

const Card = (props) => {
    return (
        <Container>
            <Header>{props.friend.name}</Header>
            <Div><p>Age: {props.friend.age}</p></Div>
            <Div><p>Email: {props.friend.email}</p></Div>
        </Container>
    )
}

export default Card;