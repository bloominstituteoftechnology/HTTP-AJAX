import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import AddFriendForm from './AddFriendForm.js';

class Friends extends React.Component {
	state = {
		data: [],
		name : '',
		email: '',
		age: 0,
	}

	componentDidMount = () => {
		axios
			.get('http://localhost:5000/friends')
	  		.then(response => {
				this.setState({data: response.data });
			})
	  		.catch(err => {
				console.log('I have hit the following Error: ', err);
			});
	}

	inputChangeHandler = (event) => {
		const name = event.target.name;
		this.setState({[name]: event.target.value})
	}

	addNewFriend = (event) => {
		event.preventDefault()
		console.log('Beginning of Add New Friend',this.state);
		axios.post('http://localhost:5000/friends', {
			name: this.state.name,
			age: this.state.age,
			email: this.state.email,
		})
		.then( response => {
			this.setState({ data: response.data});
			console.log(response);
		})
		.catch( err => console.log(err));
		this.setState({
			name: '',
			age: 0,
			email: '',
		})
	}

}

	deleteFriend = (id) => {
		return () => {
			axios.delete(`http://localhost:5000/friends/${id}`)
			.then( response => {
				this.setState({ data: response.data});
			})
			.catch(err => console.log(err));
		}
	}

	updateFriendHandler = (id, name, email, age) => {
		return() => {
			axios.put(`http://localhost:5000/friends/${id}`)
			.then( response => {
				this.setState({ data: response.data});
			})
			.catch(err => console.log(err));
		}
	}

	render() {
		return(
			
		);
	}

export default Friends;

// const Friends = (props) => {
//     return (
//         <div>
//             <h2>Hello.  My name is {props.friend.name}</h2>
//             <h4>My email is {props.friend.email}.</h4>
//             <h4>I am {props.friend.age} years old.</h4>
//             <p style ={{cursor: 'pointer'}} name={props.friend.id} onClick={props.deleteFriend(props.friend.id)}>x</p>
//         </div>
//     )
// }

// Friends.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//   };

// export default Friends;