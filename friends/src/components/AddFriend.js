import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const AddFriendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.8rem;
    width: 40%;
    margin-top: 20px;

    a{
        text-decoration: none;
        color: white;
        background-color: mediumslateblue;
        padding: 8px;
        border: 2px solid white;
        border-radius: 8px;
        margin-top: 15px;

        &:hover{
            color: mediumslateblue;
            background-color: white;
            border: 2px solid mediumslateblue;
        }
    }
`;

const LabelInputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px 0;

    label{
        width: 20%
        padding-right: 5px;
        text-align: end;
    }

    input{
        height: 20px;
        border-radius: 5px;
    }
`;

class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: undefined,
            email: ''
        }
    }

    changeName = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    changeAge = (event)=>{
        this.setState({
            age: event.target.value
        })
    }

    changeEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    }

    addFriend = ()=>{
        // TODO: Add validity check before sending
        this.props.addFriend(this.state.name, this.state.age, this.state.email);
    }

    render(){
        return (
            <AddFriendContainer>
                <LabelInputContainer>
                    <label>Name:</label>
                    <input onChange={this.changeName} type="text" placeholder="Enter friend's name..." value={this.state.name}/>
                </LabelInputContainer>
                <LabelInputContainer>
                    <label>Age:</label>
                    <input onChange={this.changeAge} type="number" placeholder="Enter friend's age..."/>
                </LabelInputContainer>
                <LabelInputContainer>
                    <label>Email:</label>
                    <input onChange={this.changeEmail} type="email" placeholder="Enter friend's email..." value={this.state.email}/>
                </LabelInputContainer>
                <Link to="/" onClick={this.addFriend}>Submit</Link>
            </AddFriendContainer>
        )
    }
}

AddFriend.propTypes = {
    addFriend: PropTypes.func
}

export default AddFriend;