// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Friend from './Friend';

// Dependencies
import axios from 'axios';

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
            <div className = ''>
                <Link to = '/postfriend'>Add new friend</Link>
                <Link to = '/friendslist'>Go to friends list</Link>
                <Link to = '/'>Go home</Link>

                <Friend friend = { this.state.friend } />

                <form onSubmit = { this.props.handlePut(this.state.friend.id) }>
                    <input name = 'friendName' type = 'text' placeholder = 'Enter new name...' />
                    <input name = 'friendAge' type = 'number' placeholder = 'Enter new age...' />
                    <input name = 'friendEmail' type = 'text' placeholder = 'Enter new email...' />
                    <input type = 'submit' value = 'submit' />
                </form>
            </div>
        );
    }
}

export default ViewFriend;
