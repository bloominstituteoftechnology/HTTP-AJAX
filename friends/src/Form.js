import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const FormDiv = styled.form`
    background-color: #f3eff6
    margin-right: 5rem;
    border: 1px solid gray;
    border-radius: 4px;
    margin-top: 5rem;
    width: 300px;
    height: 375px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3.5rem;
    justify-content: space-evenly;
`

const H2 = styled.h2`
    font-size: 2rem;
    margin: 3rem 0;
`

const Input = styled.input`
    padding: .75rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 4px;
    border: 1px solid lightgray;
    &:focus {
        outline: none;
    }
`

const Btn = styled.button`
    background-color: #957aae;
    border: none;
    font-size: 1.4rem;
    color: #fff;
    padding: 1rem;
    margin-bottom: 5rem;
    border-radius: 4px;
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
        font-weight: bold;
    }
`

export default function Form(props) {
    return (
        <Fragment>
            <Route exact path="/" render={routeProps => <FormAdd {...routeProps} updateFriends={props.updateFriends} />} />
            <Route path="/update/:id" render={routeProps => <FormUpdate {...routeProps} updateFriends={props.updateFriends} />} />
        </Fragment>
    );
}


class FormUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: null,
            ageInput: null,
            emailInput: null,
        }
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
            axios
                .put(`http://localhost:5000/friends/${this.props.match.params.id}`, {
                    name: `${this.state.nameInput}`,
                    age: this.state.ageInput,
                    email: this.state.emailInput
                })
                .then(this.setState({
                    nameInput: '',
                    ageInput: '',
                    emailInput: '',
                }))
                .then(this.props.updateFriends)
                .then(this.props.history.push('/'))
                .catch(console.log);
                console.log(this.state.nameInput);
    }

    render() {
        return (
            <FormDiv onSubmit={this.submitHandler}>
                <H2>Update a Friend:</H2>
                <Input type="text" name="nameInput" onChange={this.changeHandler} value={this.state.nameInput} placeholder="name" /><br/>
                <Input type="text" name="ageInput" onChange={this.changeHandler} value={this.state.ageInput} placeholder="age" /><br/>
                <Input type="text" name="emailInput" onChange={this.changeHandler} value={this.state.emailInput} placeholder="email" /><br/>
                <Btn type="submit">Submit</Btn>
            </FormDiv>
        );
    }
}


class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            ageInput: '',
            emailInput: ''
        };
        this.props = props;
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
            axios
                .post('http://localhost:5000/friends', {
                    name: `${this.state.nameInput}`,
                    age: this.state.ageInput,
                    email: this.state.emailInput
                })
                .then(this.setState({
                    nameInput: '',
                    ageInput: '',
                    emailInput: '',
                }))
                .then(this.props.updateFriends)
                .catch(err => console.log(err));
                console.log(this.state.nameInput);
    }

    render() {
        return (
            <FormDiv onSubmit={this.submitHandler}>
                <H2>Add a Friend:</H2>
                <Input type="text" name="nameInput" onChange={this.changeHandler} value={this.state.nameInput} placeholder="name" /><br/>
                <Input type="text" name="ageInput" onChange={this.changeHandler} value={this.state.ageInput} placeholder="age" /><br/>
                <Input type="text" name="emailInput" onChange={this.changeHandler} value={this.state.emailInput} placeholder="email" /><br/>
                <Btn type="submit">Submit</Btn>
            </FormDiv>
        );
    }

}