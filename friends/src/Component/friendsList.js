import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const FriendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 20px;
  width: 40%;
  margin: 5% 30%;
  min-height: 80vh;
  position: sticky;
  @media (max-width:800px){
    width: 70%;
  margin: 5% 15%;
  }
  @media (max-width:500px){
    width: 80%;
  margin: 5% 10%;
  }
`;
const ListHeader = styled.div`
  display: flex;
  background-color: #f9f9f9;
  justify-content: space-between;
  padding: 0 5%;
  border-radius: 10px 10px 0 0;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  h1 {
    color: teal;
  }
  a {
    text-decoration: none;
    padding-left: 1%;
    padding: 3%;
    color: white;
    background-color: goldenrod;
    border-radius: 5px;
    width: 30%;
  }
`;
const Friends = styled.div`
        margin:5%;
`;
const Friend = styled.div`
display:flex;
margin-bottom:5%;
justify-content:flex-start;
height:15vh;
border-radius:5px;
box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;
const FriendImage= styled.div`
width:15%;
height:60%;
margin: 2% 5%;
padding:.8vw;
border-radius:50%;
background-color:goldenrod;
  img{
      width:100%;
      height:100%;

  }
`;
const FriendName=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:45%;
a{
text-decoration:none;
color:teal;
font-size:1.5em;
}

`;
const FriendsButton=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    width:30%;
    a{
        text-decoration:none;
        color:black;
        padding-top:.8vh;
        text-align:center;
        height:40%;
        width:99%;
        border-radius:0px 5px 0px 0px;
        background-color:goldenrod;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    button{
        height:45%;
        width:100%;
        font-size:1rem;
        border-radius:0px 0px 5px 0px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color:goldenrod;
    }
`;
const FriendList = props => {
  return (
    <FriendListContainer>
      <ListHeader>
        <h1>Prietenii mei</h1>
        <NavLink to="/add">Adauga prieten</NavLink>
      </ListHeader>
    <Friends>
      {props.data &&
        props.data.map(friend => {
          return (
            <Friend key={`${friend.id}${friend.name}`}>
                <FriendImage>
                <Link><img src={`${friend.image}`}></img></Link>
                </FriendImage>
                <FriendName> <NavLink to={`/${friend.id}`}>{friend.name}</NavLink></FriendName>
                <FriendsButton>
                <NavLink to={`/${friend.id}/update`}>Update</NavLink>
                <button onClick={() => props.delete(friend.id)}>Delete</button>
                </FriendsButton>
            </Friend>
          );
        })}
        </Friends>
    </FriendListContainer>
  );
};
export default FriendList;
