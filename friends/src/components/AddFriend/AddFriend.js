import React, { Component } from 'react';
import axios from 'axios';
import App from '../../App'

function AddFriend(props) {
    console.log('I am this in AddFriend: ', this);
    return (
        <form onSubmit={this._friendSubmitHandler} className="af">
            <label> Name: </label><input type="text" name="name" value={this.props.name} onChange={this._friendChangeHandler} placeholder="name" />
            <label> Age: </label><input type="text" name="age" value={this.props.age} onChange={this._friendChangeHandler} placeholder="age" />
            <label> Email: </label><input type="text" name="email" value={this.props.email} onChange={this._friendChangeHandler} placeholder="email" />
            <button type="submit" className="fs__button" >add friend</button>
        </form>
    )
}


export default AddFriend;
