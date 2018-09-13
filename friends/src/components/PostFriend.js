// React
import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input } from 'reactstrap';

export default class PostFriend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            email: '',
            color: ''
        };
    }

    handleChange = e => {
        e.preventDefault();

        this.setState({
            ...this.state,
            [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value
        })
    }

    handlePost = e => {
        e.preventDefault();

        this.props.postNewFriend(this.state);
        this.props.history.push('/');
    }

    render() {
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

                <Form className = 'slide-right' onSubmit = { this.handlePost }>
                    <Input 
                        required 
                        name = 'name' 
                        type = 'text' 
                        placeholder = 'Enter name...' 
                        value = { this.state.name } 
                        onChange = { this.handleChange }
                    />
                    <Input 
                        required 
                        name = 'age' 
                        type = 'number' 
                        placeholder = 'Enter age...' 
                        value = { this.state.age } 
                        onChange = { this.handleChange }
                    />
                    <Input 
                        required 
                        name = 'email' 
                        type = 'text' 
                        placeholder = 'Enter email...' 
                        value = { this.state.email } 
                        onChange = { this.handleChange }
                    />
                    <Input 
                        required 
                        name = 'color' 
                        type = 'text' 
                        placeholder = 'Enter favorite color...' 
                        value = { this.state.color } 
                        onChange = { this.handleChange }
                    />

                    <Button color = 'secondary' type = 'submit' value = 'submit'>Submit</Button>
                </Form>
            </div>
        );
    }
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
