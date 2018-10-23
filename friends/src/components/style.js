import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
margin: 0 auto;
width:100;
max-width:960px;
// border:1px solid red;
`;

export const FriendCard = styled.div`
display:flex;
flex-direction:column;
border:1px dotted darkgrey;
width:380px;
height:auto;
padding:10px;
margin-bottom: 10px;
`;

export const ListContainer = styled.div`
 display:flex;
 flex-flow:row wrap;
 justify-content:space-around;
 width:100%;
 height:auto;
`;