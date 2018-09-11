import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FlexDiv = styled.div`
	display:flex;
	padding: 1%;
	font-size: 1.4rem;
	width: 100%;
	flex-direction: column;
`;

const FriendsList = (props) => {
	console.log(props)
	return (
		<FlexDiv>
		 {props.friends.map(f => (
		 	<Friend key={f.id} f={f} handleData={props.handleData}/>
	   ))}
		</FlexDiv>
	)
}

export default FriendsList;