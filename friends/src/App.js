import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    constructor() {
	super();
	this.state = {
	    friends: []
	};
    }

    state = {
	id: 0,
	name: '',
	age: 0,
	email: ''
    }

    handleChangeName = event => {
	this.setState({
	    name: event.target.value
	});
    }

    handleChangeEmail = event => {
	this.setState({
	    email: event.target.value
	});
    }

    handleChangeAge = event => {
	this.setState({
	    age: event.target.value
	});
    }

    handleSubmit = event => {
	event.preventDefault();
	window.location.reload();
	// const friend = {
	//     name: this.state.name,
	//     email: this.state.email,
	//     age: this.state.age
	// };

	axios.post('http://localhost:5000/friends', {name: this.state.name, age: this.state.age, email: this.state.email})
	    .then(response => {
		console.log(response);
		console.log(response.data);
	    });
    }
    
    componentDidMount() {
	axios
	    .get('http://localhost:5000/friends/')
	    .then(response => {
		const friends = response.data;
		this.setState({friends});
	    })
	    .catch(err => console.log(err));
    }
    
    render() {
	return (
	    <div className="App">
              <div>
		{this.state.friends.map(friend => <p key={friend.id}>{friend.name} <br/> {friend.email} <br/> {friend.age} </p>)}
	    </div>
                <div>
                <form onSubmit={this.handleSubmit}>
                <label>
		Name:
		<input name="name" type="text" onChange={this.handleChangeName}/>
		</label>
                <label>
		Email:
		<input name="email" type="text" onChange={this.handleChangeEmail}/>
		</label>
		<label>
		Age:
		<input name="age" type="text" onChange={this.handleChangeAge}/>
		</label>
                <button type="submit">Add</button>
                </form>
	    </div>
		</div>
	);
    }
}

export default App;

//		<input type="text" name="name" age="age" email="email"/>
