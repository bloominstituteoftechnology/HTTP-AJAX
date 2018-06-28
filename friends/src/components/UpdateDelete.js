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
            friends:[]
        }
    }

    handleChange = (e) => {
        const currentFriend = Object.assign({}, this.state.currentFriend);
        currentFriend[e.target.name] = e.target.value;
        this.setState({currentFriend});
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        this.fetchMovie(id);
    }

    fetchMovie (id) {
        axios.get('http://localhost:5000/friends')
        .then(friends => friends.data.filter(friend=>friend.id.toString()===id)[0])
        .then(friend => this.setState({ currentFriend: friend }))
        .catch(error => console.log(error));
    }

    deleteFriend = () => {
        const id = this.state.currentFriend.id;
        axios.delete(`http://localhost:5000/friends/${id}`, this.state.currentFriend)
        .then(friends=>console.log(friends))
        .catch(error => console.log(error));
    }

    updateFriend = () => {
        const id = this.state.currentFriend.id;
        axios.put(`http://localhost:5000/friends/${id}`, this.state.currentFriend)
        .then(friend=>console.log(friend))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <StyledForm>
                <FormGroup>
                    <Label for="name" >Name</Label>
                    <Input onChange={this.handleChange} type="text" name="name" id="name" value={this.state.currentFriend.name}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="age" >Age</Label>
                    <Input onChange={this.handleChange} id="age" type="number" name="age" value={Number(this.state.currentFriend.age)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="email" >Email</Label>
                    <Input onChange={this.handleChange} id="email" type="email" name="email" value={this.state.currentFriend.email}></Input>
                </FormGroup>
                <ButtonGroup>
                    <StyleButton color="success" onClick={this.updateFriend}>Update</StyleButton>
                    <StyleButton color="danger" onClick={this.deleteFriend}>Delete</StyleButton>
                    <Link to='/' style={{'color': 'white', 'textDecoration': 'none'}}><StyleButton>Go Back</StyleButton></Link>
                </ButtonGroup>
            </StyledForm>
        )
    }
}

export default UpdateDeleteFriend;