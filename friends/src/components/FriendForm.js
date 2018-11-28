import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
	width: 45%;
    border: 2px solid #CFC7D2;
    border-radius: 10px;
    background: #9E90A2;
    display: flex;
    flex-flow: column nowrap;
    padding: 2.5%;
    margin: 5% 33%;
    justify-content: space-around;
    align-items: space-between;
`;
const Input = styled.input`
	border: 1px solid black;
    border-radius: 5px;
    margin: 5% 5% 0;
    font-size: 1.5rem;
    width: 80%;
    text-align: center;
    align-self: center;
`;

const Label = styled.label `
font-size: 1.8rem;
margin: 1% 5% 2%;
color: #272932;
text-align: center;
`

const Button = styled.button`
    border: 2px solid #CFC7D2;
    background: #272932;
    border-radius: 10px;
    padding: 1% 5%;
    margin: 1% 25%;
    width: 50%;
    color: #CFC7D2;
    font-weight: bold;
	:hover {
		background: #CFC7D2;
        color: #272932 ;
        font-weight: bold;
        border: 2px solid #272932
	}
`;

const FriendForm = (props) => {
	return (
		<Form>
			<Label>
				Name
				<Input
                    type="text"
                    name='name'
					value={props.nameValue}
					placeholder="Please Enter Your Name..."
					onChange={(event) => {
                        props.handleChange(event);}}
				/>
			</Label>
			<Label>
				Age
				<Input
                    type="text"
                    name='age'
					value={props.ageValue}
					placeholder="Please Enter Your Age..."
					onChange={(event) => {
                        props.handleChange(event);}}
				/>
			</Label>
			<Label>
				Email
				<Input
                    type="text"
                    name='email'
					value={props.emailValue}
					placeholder="Please Enter Your Email..."
					onChange={(event) => {
                        props.handleChange(event);}}
				/>
			</Label>
			<Button onClick={props.addFriend}>Submit</Button>
		</Form>
	);
};
export default FriendForm;

FriendForm.propTypes = {
	value: PropTypes.string,
	handleChange: PropTypes.func,
	addFriend: PropTypes.func
};
