import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Form from './Form'

const FriendWrapper = styled.div`
	margin: 10px;
	border: 1px solid lightgrey;
	width: 80%;
	padding: 0 15px;
`;
const FriendButton = styled(Link)`
	margin: 5px auto;
	font-size: 1rem;
`;

const Friend = props => {
	return (
		<FriendWrapper>
			<FriendButton to={`/edit/${props.data.id}`}>Edit</FriendButton>
			<p> Name: {props.data.name} </p>
			<p> Age: {props.data.age} </p>
			<p> Email: {props.data.email} </p>
			<FriendButton exact to={`/${props.data.id}`} as='button'>
				End Friendship
			</FriendButton>
		</FriendWrapper>
	);
};

export default Friend;