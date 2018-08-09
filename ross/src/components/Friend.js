import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Form/Modal.js';

const Ross = styled.div`
    width: 620px;
    height:222px;
    margin:2% 0;
    box-shadow: 1px 0px 435px #292929;
    color:#252525;
    font-display:sans-serif;
    display:flex;
    flex-flow:column;

    font-size:4rem;
    line-height:0.6;
    overflow:hidden;
    text-align:center;
`;

const Delete = styled.div`
    width: 100px;
    height: 100px;
    display: inline-block;
    position: static;
    top: 0px;
    left:0px;
    font-size:5rem;
    z-index: 4;
    color: #252525;
    background: rgba(111,111,111,0.3);
    &:hover{
        cursor:pointer;
    }
`;

const Edit = styled.div`
     width: 100px;
    height: 100px;
    display: block;
    position: static;
    top: 0px;
    left:0px;
    font-size:5rem;
    z-index: 4;
    color: #252525;
    background: rgba(111,111,111,0.3);
    &:hover{
        cursor:pointer;
    }
`;

class Friend extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditting: false,
        }
        console.log("friend props", props);
        
    }

   
    toggleIsEditting = () =>{
        this.setState({ isEditting: !this.state.isEditting});
        console.log(this.state.isEditting);
    }

    render(){
        let modal;
        if (this.state.isEditting === true) modal = <Modal handleEdit={this.props.handleEdit} toggleIsEditting={this.toggleIsEditting}/>;
        return (
            <Ross>
                <Delete onClick={() => { this.props.handleDelete(this.props.ross.id) }}>X</Delete>
                <Edit onClick={this.toggleIsEditting}>?</Edit>
                <div>{this.props.ross.name}</div>
                <div>{this.props.ross.age}</div>
                <div>{this.props.ross.email}</div>
                <div>{modal}</div>
            </Ross>
        )
    }
}

export default Friend;