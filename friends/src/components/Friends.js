import React, { Component } from 'react';
import styled from 'styled-components';

const FriendsContainer    =   styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Friend    =   styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
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
                    <Friend key={index}>{friend.name} {friend.age} {friend.email} {friend.id} <div  onClick={() =>  this.props.deleteFriend(friend.id)}>X</div></Friend>
                )
            })}
            </FriendsContainer>
        )
    }
}

export default Friends;
