// React
import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input } from 'reactstrap';

const PostFriend = (props) => {
    return(
        <div className = 'container fade-in'>
            <h1>Friends List</h1>

            <div className = 'slide-left'>
                <Link to = '/'>
                    <Button color = 'success'>Go Home</Button>
                </Link>
                <Link to = '/friendslist'>
                    <Button color = 'info'>View Friends List</Button>
                </Link>
            </div>

            <Form className = 'slide-right' onSubmit = { props.handlePost }>
                <Input name = 'friendName' type = 'text' placeholder = 'Enter name...' />
                <Input name = 'friendAge' type = 'number' placeholder = 'Enter age...' />
                <Input name = 'friendEmail' type = 'text' placeholder = 'Enter email...' />
                <Input name = 'friendColor' type = 'text' placeholder = 'Enter favorite color...' />

                <Button color = 'secondary' type = 'submit' value = 'submit'>Submit</Button>
            </Form>
        </div>
    );
}

PostFriend.propTypes = {
    handleSubmit: PropTypes.func,
    history: PropTypes.shape({
        length: PropTypes.number,
        action: PropTypes.string,
        location: PropTypes.shape({
            pathname: PropTypes.string,
            search: PropTypes.string,
            hash: PropTypes.string,
            key: PropTypes.string,
        }),
        createHref: PropTypes.func,
        push: PropTypes.func
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
        key: PropTypes.string,
    }),
    match: PropTypes.shape({
        path: PropTypes.string,
        url: PropTypes.string,
        isExact: PropTypes.bool
    })
}

export default PostFriend;
