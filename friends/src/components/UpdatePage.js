import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';
import FriendForm from './FriendForm';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Main = styled.main`
	display: flex;
	flex-flow: column wrap;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	width: 80%;
	padding: 1%;
	margin: 1% 4% 7.5%;
	background: #bea8aa;
`;

const H1 = styled.h1`
	font-size: ${(props) => (props.link ? '1.5rem' : '3rem')};
	color: ${(props) => (props.top ? '#F1F7ED ' : '#272932')};
	font-family: Arial, Helvetica, sans-serif;
	margin: 5% 0;
	:hover {
		${(props) => (props.link ? 'color: #F1F7ED' : null)}
	}
`;

const UpdatePage = (props) => {
	return (
		<React.Fragment>
			<H1 top>Current Friend</H1>
			<Main>
				<Friend friends={props.friends} match={props.match} />
				<H1>Update Details</H1>
				<FriendForm
					updateFriend={props.updateFriend}
					mode="Update"
					match={props.match}
				/>
				<NavLink to={'/'} activeStyle={{ textDecoration: 'none' }}>
					<H1 link>Back to Home</H1>
				</NavLink>
			</Main>
		</React.Fragment>
	);
};

export default UpdatePage;
