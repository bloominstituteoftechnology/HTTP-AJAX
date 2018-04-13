import React, { Component } from 'react';
import axios from 'axios';

import './AddFriend.css';

export default class AddFriend extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form className="AddFriend">
                <span className='Field'><span className='Field__Title'>Name: </span><input type="text" name="Name" className='Field__Input' /></span>
                <span className='Field'><span className='Field__Title'>Age: </span><input type="number" name="Age" className='Field__Input' /></span>
                <span className='Field'><span className='Field__Title'>Email: </span><input type="text" name="Email" className='Field__Input' /></span>
                <button type='button' name='Button' className='Field__Button'>Add Friend</button>
            </form>
        );
    }
}