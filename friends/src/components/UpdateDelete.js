import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const StyledForm = styled(Form)`
    width: 40%;
    margin: auto;
    border: 1px solid lightgray;
    border-radius: 5px;
    text-align: left;
    padding: 15px;
`

const StyleButton = styled(Button)`
    width: 100px;
`

const ButtonGroup = styled(FormGroup)`
    display:flex;
    justify-content: space-around;
`

class UpdateDeleteFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFriend: {},
            updatedFriend: {}
        }
    }

    handleChange = (e) => {
        const updatedFriend = Object.assign({}, this.state.updatedFriend);
        updatedFriend[e.target.name] = e.target.value;
        this.setState({updatedFriend});
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        this.fetchFriend(id);
    }

    fetchFriend (id) {
        axios.get('http://localhost:5000/friends')
        .then(friends => friends.data.filter(friend=>friend.id.toString()===id)[0])
        .then(friend => this.setState({ currentFriend: friend }))
        .catch(error => console.log(error));
    }

    deleteFriend = () => {
        const id = this.props.match.params.id;
        axios.delete(`http://localhost:5000/friends/${id}`)
        .then(res => this.props.updateFriends(res.data))
        .catch(error => console.log(error));
    }

    updateFriend = () => {
        const id = this.state.currentFriend.id;
        const updatedFriend = {
            name : this.state.updatedFriend.name? this.state.updatedFriend.name : this.state.currentFriend.name,
            age : this.state.updatedFriend.age? this.state.updatedFriendriend.age : this.state.currentFriend.age,
            email : this.state.updatedFriend.email? this.state.updatedFriend.email : this.state.currentFriend.email
        }
        axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
        .then(res => this.props.updateFriends(res.data))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <StyledForm>
                <FormGroup>
                    <Label for="name">Current Name: {this.state.currentFriend.name}</Label>
                    <Input onChange={this.handleChange} type="text" name="name" id="name" placeholder="...enter new name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="age">Current Age: {this.state.currentFriend.age}</Label>
                    <Input onChange={this.handleChange} id="age" type="number" name="age" placeholder="...enter new age"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Current Email: {this.state.currentFriend.email}</Label>
                    <Input onChange={this.handleChange} id="email" type="email" name="email" placeholder="...enter new email"></Input>
                </FormGroup>
                <ButtonGroup>
                    <Link to='/' style={{'color': 'white', 'textDecoration': 'none'}}><StyleButton color="success" onClick={this.updateFriend}>Update</StyleButton></Link>
                    <Link to='/' style={{'color': 'white', 'textDecoration': 'none'}}><StyleButton color="danger" onClick={this.deleteFriend}>Delete</StyleButton></Link>
                    <Link to='/' style={{'color': 'white', 'textDecoration': 'none'}}><StyleButton>Go Back</StyleButton></Link>
                </ButtonGroup>
            </StyledForm>
        )
    }
}

export default UpdateDeleteFriend;