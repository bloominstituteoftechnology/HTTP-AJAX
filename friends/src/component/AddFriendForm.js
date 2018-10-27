import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const FriendForm = styled.form`
    text-align: center;
    background-color: lightgrey;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 25px;
`;

const NewFriendNameInput = styled.input`
    margin: 0px 10px;
    height: 30px;
    width: 150px;
    font-size: 1.4rem;
    padding: 0px 5px;
`;

const NewFriendEmailInput = styled.input`
    margin: 0px 10px;
    height: 30px;
    width: 220px;
    font-size: 1.4rem;
    padding: 0px 5px;
`;

const NewFriendAgeInput = styled.input`
    margin: 0px 10px;
    height: 30px;
    width: 80px;
    font-size: 1.4rem;
    padding: 0px 5px;
`;
const NewFriendLabel = styled.label`
    width: 50px;
    font-size: 1.4rem;
`;

const NewFriendButton = styled.button`
    width: 80px;
    height: 35px;
    font-size:1.4rem;
    background-color: aqua;
    font-weight: bold;
    border: 1px solid green;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid grey;
    }
`;

const NewFriendH1 = styled.h1`
    font-size: 2.0rem;
    font-weight: bold;
`;

class AddFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            name : '',
            email: '',
            age: '',
        }
    }

    inputChangeHandler = (event) => {
		const name = event.target.name;
		this.setState({[name]: event.target.value})
	}

    render() {
        return (
            <FriendForm onSubmit={this.props.addNewFriend}>
                <NewFriendH1>Enter your new Friend's info below:</NewFriendH1>
                <NewFriendLabel for='Name'>Name:</NewFriendLabel>
                <NewFriendNameInput type='text' placeholder='Jon Snow' name='name' value={this.state.name} onChange={this.inputChangeHandler} />
                <NewFriendLabel for='Email'>Email:</NewFriendLabel>
                <NewFriendEmailInput type='text' placeholder='myemail@email.com' name='email' value={this.state.email} onChange={this.inputChangeHandler} />
                <NewFriendLabel for='Age'>Age:</NewFriendLabel>
                <NewFriendAgeInput type='number' placeholder='31' name='age' value={this.state.age} onChange={this.inputChangeHandler} />
                <NewFriendButton type='submit'>Submit</NewFriendButton>
            </FriendForm>
        );
    }
}

AddFriendForm.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };

export default AddFriendForm;