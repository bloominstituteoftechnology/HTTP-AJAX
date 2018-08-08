import React from 'react';
import {Link, Route} from 'react-router-dom';
import FriendPage from './FriendPage';
import styled from 'styled-components'; 


const FriendListDiv = styled.div`
    width: 500px;
    border: 2px solid black;
    

`;
const FriendListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    a{
        text-decoration: none;
        color: white; 
    }
`
const H1 = styled.h1`
    color: blue; 
    text-align: center;
`;

const LI = styled.li `
    background: red;
    box-shadow: 10px 10px; 
    margin: 30px;
    text-align: center;
`;


class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends: []
        }
    }
    render() {
        console.log(this.props.friends)
        console.log(this.props); 
        const friends = this.props.friends
        return(
            <FriendListContainer>
                <FriendListDiv>
                    <H1>HTTP -AJAX Friends</H1>
                    <ul>
                        {friends.map(friend => <Link key ={friend.id} to = {`/${friend.name}`}><LI key ={friend.id}>{friend.name}  {friend.age}  {friend.email}</LI></Link>)}
                    </ul>
                    <div><Link to ='/create-friend'>Click Here to Add New Friend</Link></div>
                </FriendListDiv>
                
                
            </FriendListContainer>
         );
    }
}

export default FriendsList