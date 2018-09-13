import React from 'react';
import Card from './Card'
import Styled from 'styled-components';

const Wrapper = Styled.div`
    margin-top: 10%;
`;



function CardList(props) {
    return (
        <Wrapper>
            {props.data.map(friend => ( <Card key={friend.id} friend={friend} handleDelete={props.handleDelete} goToUpdateFriendForm={props.goToUpdateFriendForm} date={Date.now()}/> ))}
        </Wrapper>
        
    )
}

export default CardList;