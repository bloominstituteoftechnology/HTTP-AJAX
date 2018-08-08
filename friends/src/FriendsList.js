import React from 'react';
import {Link, Route} from 'react-router-dom';
import FriendPage from './FriendPage';
import styled from 'styled-components'; 


const FriendListDiv = styled.div`
    width: 100%;

`;
const FriendListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`

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
                    <h1>HTTP -AJAX Friends</h1>
                    <ul>
                        {friends.map(friend => <Link key ={friend.id} to = {`/${friend.name}`}><li key ={friend.id}>{friend.name}  {friend.age}  {friend.email}</li></Link>)}
                    </ul>
                    <div><Link to ='/create-friend'>Click Here to Add New Friend</Link></div>
                </FriendListDiv>
                <Route path = '/:name' render={(props) => <FriendPage {...props} delete = {this.props.delete}/> }/>
                
            </FriendListContainer>
         );
    }
}

export default FriendsList