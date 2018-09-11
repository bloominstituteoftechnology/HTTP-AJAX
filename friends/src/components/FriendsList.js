import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const FlexDiv = styled.div`
	display:flex;
	padding: 1%;
	font-size: 1.4rem;
	width: 100%;
	flex-direction: column;
`;

const FriendDiv = styled.div`
	> a {
		color: black;
		text-decoration: none;
	}
`;

const FriendsList = (props) => {
	return (
		<FlexDiv>
		 {props.friends.map(f => (
		 	<FriendDiv>
			 	<Link to={`/${f.id}`}><p>View Profile here</p></Link>
			 	<Friend key={f.id} f={f} handleData={props.handleData} path={props.match.path + `${f.id}`} />
		 	</FriendDiv>
	   ))}
		</FlexDiv>
	)
}

export default FriendsList;