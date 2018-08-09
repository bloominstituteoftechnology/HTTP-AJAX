import React, { Component } from 'react';
import styled from 'styled-components';



const Input = {
    width:'380px',
    height:'90px',
    background:'#0E0C14',
    border:'solid 0px #000',
    fontSize:'8rem',
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
    color: #292929;
    border:solid 0px #000;
    font-size:2rem;
    font-family:sans-serif;
    text-align:end;
    &:hover{
        color:#44081b;
        height:67px;
    }
`;

const FormContainer = styled.div`
    width:400px;
    height:300px;
    margin:5% ;
    position:fixed;
    display:flex;
    flex-flow:column;
    justify-content:stretch;
`;



class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
        };
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return (
            <FormContainer>
                <HOne>adD frienD</HOne>
                <input style={Input} type="text" name="name" placeholder="name" onChange={this.handleInput}/>
                <input style={Input} type="text" name="email" placeholder="email" onChange={this.handleInput} />
                <input style={Input} type="text" name="age" placeholder="age" onChange={this.handleInput} />
                <Btn onClick={()=>{this.props.handleSubmit(this.state)}}>mOO pOint</Btn>
            </FormContainer>
        )
    }
}

export default Form;