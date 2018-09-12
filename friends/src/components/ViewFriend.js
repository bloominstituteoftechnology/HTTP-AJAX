// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Friend from './Friend';

// Dependencies
import axios from 'axios';

// Styles
import './ViewFriend.css';
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
                emali: ''
            }
        };
    }

    fetchData = res => {
        this.setState({
			friend: res.filter(friend => friend.id.toString() === this.props.match.params.id)[0]
		});
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(res => this.fetchData(res.data))
			.catch(err => console.log(err));
	}

    render() {
        return(
            <div className = 'view-friend'>
                <div>
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

                <Form onSubmit = { this.props.handlePut(this.state.friend.id) }>
                    <h3>Update Contact Information</h3>

                    <Input name = 'friendName' type = 'text' placeholder = 'Enter updated name...' />
                    <Input name = 'friendAge' type = 'number' placeholder = 'Enter updated age...' />
                    <Input name = 'friendEmail' type = 'text' placeholder = 'Enter udpated email...' />
                    <Input name = 'friendColor' type = 'text' placeholder = 'Enter updated fav color...' />
                    
                    <Button color = 'secondary' type = 'submit' value = 'submit'>Submit</Button>
                </Form>

                <Button color = 'danger' onClick = { this.props.handleDelete(this.state.friend.id) }>Delete Contact</Button>
            </div>
        );
    }
}

export default ViewFriend;
