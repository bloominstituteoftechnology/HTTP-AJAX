import React, { Component } from 'react';
import './NewFriend.css';

export default class NewFriend extends Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
    }

    friendForm = () => {
        
    } 

    render() {
        return (
            <div className="form-container">
                <form className='friend-form'>
                    <input type="text" name='name' placeholder="First Name" />
                    <input type="text" name='age' placeholder="Your Age" />
                    <input type="text" name='email' placeholder="Your Email" />
                    <input type="submit" name='submit new friend' />
                </form>
            </div>
        )
    }
}