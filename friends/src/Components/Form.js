import React from 'react';
import axios from "axios";

export default class  Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.data,
            
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
    
        const newfriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        }
        axios.post(`http://localhost:5000/friends`, newfriend)
        .then (response => {
            console.log(response.data);
            this.props.state.setState({ data: response.data})
        })
        .catch( err=>console.log("Failed to update."))

        // document.getElementById('form').rest();
    }

    render ()  {
        return (

        
        <form id='form' onSubmit={this.handleSubmit}>
          <h2>Add friend:</h2>
          <input type="text" id='name' placeholder="name" onChange={this.handleChange}></input>
          <input type="number" id='age' placeholder="age" onChange={this.handleChange}></input>
          <input type="email" id='email' placeholder="email" onChange={this.handleChange}></input>
          <hr></hr>
          <button type='submit'>Add</button>
        </form>
        )
    }

}