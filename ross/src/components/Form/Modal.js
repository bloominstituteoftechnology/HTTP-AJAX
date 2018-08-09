import React, { Component } from 'react';
import styled from 'styled-components';



const Input = {
    width: '380px',
    height: '90px',
    background: '#0E0C14',
    border: 'solid 0px #000',
    fontSize: '8rem',
    color: '#292929',
};

const HOne = styled.div`
    font-size:2rem;
    font-family:sans-serif;
    color: #292929;
    
`;

const Btn = styled.button`
    height:67px;
    background:rgba(0,0,0,0);
    ${'' /* box-shadow: 1px 0px 435px #292929; */}
    color: #292929;
    border:solid 0px #000;
    font-size:2rem;
    font-family:sans-serif;
    text-align:end;
    &:hover{
        ${'' /* background:rgba(111,111,111,0.1); */}
        color:#44081b;
        height:67px;
    }
`;

const FormContainer = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:space-around;
    align-items:center;
    margin:0px;
   width: 100%;
    height:100%;
    z-index:2000;
    position:fixed;
    background:black;
    left:0px;
    top:0px;
`;



class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: []
        };

    }

    componentDidMount() {

    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSave = () => {
        this.props.handleEdit(this.state)
        this.props.toggleIsEditting();
    }

    handleCancel = () => {

    }

    render() {
        return (
            <FormContainer>
                <HOne>adD frienD</HOne>
                <input style={Input} type="text" name="name" placeholder="name" onChange={this.handleInput} />
                <input style={Input} type="text" name="email" placeholder="email" onChange={this.handleInput} />
                <input style={Input} type="text" name="age" placeholder="age" onChange={this.handleInput} />
                <Btn onClick={this.handleSave}>Save</Btn>
                <Btn onClick={this.handleCancel}>Cancel</Btn>
            </FormContainer>
        )
    }
}

export default Modal;