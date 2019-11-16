import React from 'react';
import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import Styled from  'styled-components';
import {Link} from 'react-router-dom';

const Container = Styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

const FriendsList = props => {
    return (
        <Container>
            {props.friends.map(friend => {
                return <FriendCard key={friend.id} 
                name={friend.name} 
                age={friend.age} 
                email={friend.email} 
                location={friend.location} 
                id={friend.id} 
                deleteFriend={props.deleteFriend} 
                toggleForm={props.toggleForm} showForm={props.showEditForm}/>
            })}
            <Link to='/newfriend' ><button>Add new friend</button></Link>
 
        </Container>
    );
}

FriendsList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    location: PropTypes.string
}
export default FriendsList;