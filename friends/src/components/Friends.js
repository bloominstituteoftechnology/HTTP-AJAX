import React, { Component } from 'react';
import styled from 'styled-components';

const FriendsContainer    =   styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

const Friend    =   styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    width: 30%;
    margin: 10px;
    border: solid 1px black;
    border-radius: 10px;
    background: aqua;
    height: 50px;
`

const Delete    =   styled.div`
    &:hover {
        cursor: pointer;
    }
`

class Friends extends Component {
    constructor(props)  {
        super(props);
        this.state  =   {
            friends: this.props.friends,
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState((state)   =>  ({
            friends: newProps.friends,
        }))
    }
    render()    {
        return(
            <FriendsContainer>
            {this.state.friends.map((friend, index) =>  {
                return(
                    <Friend key={index}>{friend.name} {friend.age} {friend.email} {friend.id} <Delete  onClick={() =>  this.props.deleteFriend(friend.id)}>X</Delete></Friend>
                )
            })}
            </FriendsContainer>
        )
    }
}

export default Friends;
