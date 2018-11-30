import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FriendWrapper = styled.div`
	margin: 10px;
	width: 90%;
	box-sizing: content-box;
`;

const FriendButton = styled(Link)`
	margin: 5px auto;
	font-size: 1rem;
`;

const BoldP = styled.p`
	font-weight: bold;
`;

const Friend = props => {
	return (
		<FriendWrapper>
			<BoldP> Name: {props.data.name} </BoldP>
			<p> Age: {props.data.age} </p>
			<p> Email: {props.data.email} </p>
			<FriendButton to={`/edit/${props.data.id}`}>
				<button> Edit </button>
			</FriendButton>
			<FriendButton
				exact
				to={`/`}
				onClick={event => {
					event.preventDefault();
					props.deleteFriend(props.data.id);
				}}>
				<button>End</button>
			</FriendButton>
		</FriendWrapper>
	);
};

export default Friend;
