import React from 'react';
import axios from 'axios';

class Form extends React.Component {
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

	axios.post('http://localhost:5000/friends', {name: this.state.name, age: this.state.age, email: this.state.email})
	    .then(response => {
		console.log(response);
		console.log(response.data);
	    });
    }

    render() {
	return (
	    <div>
	      <a href="http://localhost:3000">Home</a>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <p >Name:</p>
		  <input name="name" type="text" onChange={this.handleChangeName}/>
		</label>
                <label>
                  <p>Email:</p>
		  <input name="email" type="text" onChange={this.handleChangeEmail}/>
		</label>
		<label>
                  <p>Age:</p>
		  <input name="age" type="number" onChange={this.handleChangeAge}/>
		</label><br/>
                <button type="submit">Add</button>
              </form>
	    </div>
	);
    }
}

export default Form;
