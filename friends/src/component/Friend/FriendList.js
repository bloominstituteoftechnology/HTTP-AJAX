import React from 'react';
import styled from 'styled-components';

const Friend = styled.div`
    padding: 0.5rem;
    margin: 0 auto;
    width: 300px;
    border: 3px solid coral;
    font-weight: 800;
    color: red;
    background-image: url('http://img2.tvtome.com/i/u/0aa3afb3cbe3468fc6e43e50070b0810.png');
    background-size: 350px 250px;
    background-repeat: no-repeat;
`
const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
`

const FriendList = props => {
    if(props.loading){
        return <h2>Loading Data...</h2>
    }
    return (
        <Div>
            {props.friends.map((friend) =>
                <Friend key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <p>Friends since: {friend.date}</p>
                    <button id={friend.id} onClick={props.delete}>Delete Friend</button><br />
                    <button id={friend.id} onClick={props.update}>Update Info</button>
                </Friend>
            )}
        </Div>
    )


}

export default FriendList;