// React
import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './PostFriend.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input } from 'reactstrap';

const PostFriend = (props) => {
    return(
        <div className = 'post-friend'>
            <h1>Friends List</h1>
            <Link to = '/'>
                <Button color = 'success'>Go Home</Button>
            </Link>
            <Link to = '/friendslist'>
                <Button color = 'info'>View Friends List</Button>
            </Link>
            
            <Form onSubmit = { props.handlePost }>
                <Input name = 'friendName' type = 'text' placeholder = 'Enter name...' />
                <Input name = 'friendAge' type = 'number' placeholder = 'Enter age...' />
                <Input name = 'friendEmail' type = 'text' placeholder = 'Enter email...' />
                <Input name = 'friendColor' type = 'text' placeholder = 'Enter favorite color...' />

                <Button color='secondary' type = 'submit' value = 'submit'>Submit</Button>
            </Form>
        </div>
    );
}

PostFriend.propTypes = {
    handleSubmit: PropTypes.func
}

export default PostFriend;
