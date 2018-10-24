import React, { Component } from 'react';
import styled from 'styled-components';

const Submit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: 100px;
    height: 50px;
    border: solid 1px black;
    border-radius: 20px;
`

const Input =   styled.input`
    margin-top: 15px;
    height: 20px;
    width: 150px;
`

const Container =   styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class NewFriend extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            inputName: "",
            inputAge: null,
            inputEmail: "",
            inputId: null
        }
    }

    onChangeHandler =   ({target})  =>   {
        if(target.name === "name")    {
            this.setState((state)   =>  ({
                inputName:    target.value
            }))
        }   else if(target.name === "age")   {
            this.setState((state)   =>  ({
                inputAge:    parseInt(target.value)
            }))
        }   else if(target.name === "email")   {
            this.setState((state)   =>  ({
                inputEmail:    target.value
            }))
        }   else if(target.name === "id")   {
            this.setState((state)   =>  ({
                inputId: target.value
            }))
        }
    }

    render()    {
        return(
            <Container className="input">
                <Input onChange={this.onChangeHandler} name="name" placeholder="Name..."></Input>
                <Input onChange={this.onChangeHandler} name="age" placeholder="Age..."></Input>
                <Input onChange={this.onChangeHandler} name="email" placeholder="e-mail..."></Input>
                <Input onChange={this.onChangeHandler} name="id" placeholder="ID..."></Input>
                <Submit onClick={() =>  this.props.submitHandler(this.state.inputName, this.state.inputAge, this.state.inputEmail, this.state.inputId)}>Submit</Submit>
            </Container>
        )
    }
}

export default NewFriend;
