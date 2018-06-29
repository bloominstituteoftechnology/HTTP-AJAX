import React, { Component } from 'react';
import styled from 'styled-components';

const FriendDiv = styled.div`
position: relative;
width: 160px;
display: flex;
justify-content: center;
align-items:center;
text-align: center;
background-color: black
color: white;
list-style: none;
flex-direction: column;
overflow-y: auto;
height: 100%;
align-items: flex-start;
margin: 5px;
`
const PageContainer = styled.div`
position: relative;
margin: 20px auto;
max-width: 1000px;
display:flex;
justify-content: center;
align-items: center;
`
const MessageDiv = styled.div `

width: 380px;
display: flex;
justify-content: center;
align-items:center;
text-align: center;
background-color: white;
color: black;
list-style: none;
flex-direction: column;
overflow-y: auto;
height: 340px;
align-items: flex-start;
border: 1px solid grey;

`
const Wrapper = styled.div`
height: 340px;
margin: 0 auto;
`


class FriendsList extends Component {
  constructor(props){
    super(props)
  }
  render() { 
    return ( 
      <PageContainer>
      <FriendDiv>
      <Wrapper>
        {this.props.friends.map(friend => <div key={Math.random()} style={{display: 'flex', flexDirection:'column'}}>
       <div> <img src ={friend[1].profile_pic} style={{paddingTop:'15px', borderRadius: '50%'}}/></div><div>{friend[1].first_name}</div>
        </div>)}</Wrapper>
      </FriendDiv>
      
      <MessageDiv></MessageDiv>
      </PageContainer>
     )
  }
}
 
export default FriendsList;