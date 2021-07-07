// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Friend from './Friend';

// Dependencies
import axios from 'axios';
import PropTypes from 'prop-types';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input } from 'reactstrap';

class ViewFriend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: {
                id: 0,
                name: '',
                age: 0,
                emali: '',
                color: ''
            },
            updatedFriend: {
                id: 0,
                name: '',
                age: 0,
                email: '',
                color: ''
            }
        };
    }

    fetchData = res => {
        const friendObj = res.filter(friend => friend.id.toString() === this.props.match.params.id)[0];
        this.setState({
            friend: friendObj,
            updatedFriend: friendObj
		});
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(res => this.fetchData(res.data))
			.catch(err => console.log(err));
    }

    handleChange = e => {
        e.preventDefault();

        this.setState({
            updatedFriend: {
                ...this.state.updatedFriend,
                [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value
            }
        })
    }

    handlePut = e => {
        e.preventDefault();
        
        this.props.putFriend(this.state.updatedFriend);
        this.props.history.push('/');
    }

    handleDelete = id => e => {
        e.preventDefault();

        this.props.deleteFriend(id);
        this.props.history.push('/');
    }

    render() {
        return(
            <div className = 'container fade-in'>
                <div className = 'slide-right'>
                    <Link to = '/'>
                        <Button color = 'success'>Go Home</Button>
                    </Link>
                    <Link to = '/postfriend'>
                        <Button color = 'primary'>Add New Friend</Button>
                    </Link>
                    <Link to = '/friendslist'>
                        <Button color = 'info'>View Friends List</Button>
                    </Link>
                </div>

                <Friend friend = { this.state.friend } />

                <Form className = 'slide-left' onSubmit = { this.handlePut }>
                    <h3>Update Contact Information</h3>

                    <Input 
                        required 
                        name = 'name' 
                        type = 'text' 
                        placeholder = 'Enter updated name...' 
                        value = { this.state.updatedFriend.name } 
                        onChange = { this.handleChange }
                    />
                    <Input 
                        required 
                        name = 'age' 
                        type = 'number' 
                        placeholder = 'Enter updated age...' 
                        value = { this.state.updatedFriend.age } 
                        onChange = { this.handleChange }
                    />
                    <Input 
                        required 
                        name = 'email' 
                        type = 'text' 
                        placeholder = 'Enter updated email...' 
                        value = { this.state.updatedFriend.email } 
                        onChange = { this.handleChange }
                    />
                    <Input 
                        required 
                        name = 'color' 
                        type = 'text' 
                        placeholder = 'Enter updated fav color...' 
                        value = { this.state.updatedFriend.color } 
                        onChange = { this.handleChange }
                    />
                    
                    <Button color = 'secondary' type = 'submit' value = 'submit'>Submit</Button>
                </Form>

                <Button color = 'danger' onClick = { this.handleDelete(this.state.friend.id) }>Delete Contact</Button>
            </div>
        );
    }
}

ViewFriend.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
        color: PropTypes.string
    })),
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

export default ViewFriend;
