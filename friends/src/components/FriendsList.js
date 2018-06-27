import React from 'react';
import PropTypes from 'prop-types';
import FriendForm from './FriendForm';
import FriendCard from './FriendCard';
import Styled from  'styled-components';

const Container = Styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

const FriendsList = props => {
    return (
        <Container>
            {props.friends.map(friend => {
                return <FriendCard key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
            })}
            <FriendForm newFriend={props.newFriend} textHandler={props.textHandler} addFriend={props.addFriend} />
        </Container>
    );
}

FriendsList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
export default FriendsList;