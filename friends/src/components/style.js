import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
margin: 0 auto;
width:100;
max-width:960px;
//border:1px solid red;
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
flex-direction:column;
width:100%;
height:auto;
`;

export const Column = styled.div`
display:flex;
flex-direction:row;
height:auto ;
//border:1px solid #e1e5e9;
margin-bottom:15px;
`;