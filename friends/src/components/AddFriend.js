import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addFriend, updateFriend, deleteFriend} from '../actions';

class AddFriend extends Component {
		constructor() {
				super();

				this.state = {
						name: '',
						age: '',
						email: '',
						index: ''
				};
		}

		handleNameChange = (e) => {
				this.setState({name: e.target.value});
		};

		handleAgeChange = (e) => {
				this.setState({age: e.target.value});
		};

		handleEmailChange = (e) => {
				this.setState({email: e.target.value});
		};

		handleIndexChange = (e) => {
				this.setState({index: e.target.value});
		};

		newFriend = (e) => {
				e.preventDefault();
				const newFriend = {
						name: this.state.name,
						age: this.state.age,
						email: this.state.email
				};
				this
						.props
						.addFriend(newFriend);
				this.setState({name: '', age: '', email: '', index: ''});
		};

		updateFriend = (e) => {
				e.preventDefault();
				if (!this.state.index) {
						return;
				}
				const data = {
						index: this.state.index,
						update: {
								name: this.state.name,
								age: this.state.age,
								email: this.state.email
						}
				};
				this
						.props
						.updateFriend(data);
				this.setState({name: '', age: '', email: '', index: ''});
		};

		deleteFriend = (e) => {
				e.preventDefault();
				if (!this.state.index) 
						return;
				this
						.props
						.deleteFriend(this.state.index);
				this.setState({name: '', age: '', email: '', index: ''});
		};

		render() {
				return (
						<div>
								<input
										value={this.state.name}
										onChange={this.handleNameChange}
										placeholder="Name"/>
								<input
										value={this.state.age}
										onChange={this.handleAgeChange}
										placeholder="Age"/>
								<input
										value={this.state.email}
										onChange={this.handleEmailChange}
										placeholder="Email"/>
								<input
										value={this.state.index}
										onChange={this.handleIndexChange}
										placeholder="Index"/>
								<button onClick={this.newFriend}>Add</button>
								<button onClick={this.updateFriend}>Update</button>
								<button onClick={this.deleteFriend}>Delete</button>
						</div>
				);
		}
}

export default connect(null, {addFriend, updateFriend, deleteFriend})(AddFriend);