import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.main`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	padding: 1%;
	margin: 1% 4%;
	background: #9e90a2;
`;

const Section = styled.section`
	border: 1px solid #f1f7ed;
	border-radius: 5px;
	width: 35%;
	padding: 1%;
	margin: 1%;
	background: #bea8aa;
`;
const H1 = styled.h1`
	font-weight: bold;
	font-size: 2rem;
	color: #f1f7ed;
	font-family: cursive;
	margin-bottom: 5%;
	text-align: center;
`;
const H2 = styled.h2`
	font-size: 1.2rem;
	color: #272932;
	margin: 5% 0;
	font-weight: bold;
	text-align: center;
`;

const Button = styled.button`
	border: 1px solid #f1f7ed;
	border-radius: 50%;
	width: 20px;
	background: #272932;
	color: #f1f7ed;
	border: none;
`;
const FriendList = (props) => {
	return (
		<React.Fragment>
			<Main>
				{props.data.map((friend, index) => {
					return (
						<Section key={index}>
							<Button onClick={props.deleteFriend}>x</Button>
							<H1>{friend.name}</H1>
							<H2>Age: {friend.age}</H2>
							<H2>Email: {friend.email}</H2>
						</Section>
					);
				})}
			</Main>
		</React.Fragment>
	);
};

export default FriendList;

FriendList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			age: PropTypes.number,
			email: PropTypes.string,
		})
    ),
    deleteFriend: PropTypes.func
};
