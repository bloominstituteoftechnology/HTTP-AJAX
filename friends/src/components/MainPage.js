import React from 'react';
import styled from 'styled-components';
import FriendList from './FriendList';
import FriendForm from './FriendForm';
import PropTypes from 'prop-types';

const Main = styled.main`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	width: 80%;
	padding: 1%;
	margin: 1% 4% 7.5%;
	background: #bea8aa;
`;

const H1 = styled.h1`
	font-size: 3rem;
	color: ${(props) => (props.top ? '#F1F7ED ' : '#272932')};
	font-family: Arial, Helvetica, sans-serif;
	margin: 5% 0;
`;

const MainPage = (props) => {
	return (
		<React.Fragment>
			<H1 top>Friend List</H1>
			<Main>
				<FriendList data={props.friends} deleteFriend={props.deleteFriend} />
				<H1>Add To Your Friend List</H1>
				<FriendForm addFriend={props.addFriend} mode="Add" />
			</Main>
		</React.Fragment>
	);
};

export default MainPage;

MainPage.propTypes = {
	friends: PropTypes.array,
	addFriend: PropTypes.func,
	deleteFriend: PropTypes.func
}