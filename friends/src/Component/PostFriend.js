import React, { Component } from 'react';
import axios from 'axios';

const PostFriends = props => {
    axios({
        method: 'post',
        url: 'http://localhost:5000/friends',
        data: {
            name: props.boo.inp.name,
            age: props.boo.inp.age,
            email: props.boo.inp.email
        }
        });


    return(
        <div>
            {console.log(props)}
        </div>
    );
}

export default PostFriends;