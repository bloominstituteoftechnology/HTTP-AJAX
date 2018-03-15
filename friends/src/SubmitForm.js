import React, { Component } from 'react';
//import axios from 'axios';

class SubmitForm extends Component {
    
    render (){
        return (
            <div>
                <form className = 'form'>
                            <input className = 'form-item' onChange = {this.props.onIdChange} placeholder = 'ID : Use this input only if you want to update a friends information' /> 
                            <input className = 'form-item' onChange = {this.props.onNameChange} placeholder = 'friends name' />
                            <input className = 'form-item' onChange = {this.props.onAgeChange} placeholder = 'friends age' />
                            <input className = 'form-item' onChange = {this.props.onEmailChange} placeholder = 'friends email' />
                            <button className = 'form-item' onClick = {this.props.submit}>Add Friend</button>
                            <button className = 'form-item' onClick = {this.props.onDelete}>Delete Friend</button>
                            <button className = 'form-item' onClick = {this.props.onUpdate}>Update Friend</button>
                </form>
            </div>
        );
    }

}

export default SubmitForm;