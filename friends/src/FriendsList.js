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
    background: gray;
    a{
        text-decoration: none;
        color: white; 
    }
    input{
        margin-bottom: 20px;
    }
    input:hover{
        border:3px solid blue; 
    }
    button:hover{
        cursor:pointer;
        color:white;
        font:weight: bold;
        width: 100px;
        background: blue;

    }
`
const H1 = styled.h1`
    color: blue; 
    text-align: center;
`;

const LI = styled.li `
    background: blue;
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
        
        const friends = this.props.friends
        return(
            <FriendListContainer>
                <FriendListDiv>
                    <H1>HTTP -AJAX Friends</H1>
                    {/* <Link to ='/create-friend'><H1>Add New Friend Click Here</H1></Link>  */}
                    <ul>
                        {friends.map(friend => <Link key ={friend.id} to = {`/${friend.name}`}><LI key ={friend.id}>{friend.name}  {friend.age}  {friend.email}</LI></Link>)}
                    </ul>
                    <div>
                    
                    <form style ={{paddingLeft: '50px', marginBottom: '30px'}}>
                        <h1>Add New Friend</h1>
                        <h1>Name</h1>
                        <input  onChange = {this.props.handleChange} placeholder = "Enter name here" name = "name" value = {this.props.name}/>
                        <h1>Age</h1>
                        <input  onChange = {this.props.handleChange} placeholder = "Enter age here" name = "age" value = {this.props.age}/>
                        <h1>Email</h1>
                        <input  onChange = {this.props.handleChange} placeholder = "Enter name here" name = "email" value = {this.props.email}/>
                        <br/>
                        <button onClick = {this.props.handleSubmit}>Submit</button>
                    </form>
                     
                </div>
                </FriendListDiv>
                
                
            </FriendListContainer>
         );
    }
}

export default FriendsList