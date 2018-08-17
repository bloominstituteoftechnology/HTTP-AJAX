import React from 'react';
import axios from 'axios';


export default class Form extends React.Component {
      constructor(){
        super()
        this.state = {
            friends: [],
            name: null,
            age: null,
            email: null
        };
    
    }


        handleSubmit = event => {
            // event.preventDefault();
    
            const user = {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
            }
    
        
        
            axios
            .post('http://localhost:5000/friends', user)
            .then(res => { console.log(res.data)
                this.setState({
                    friends: res.data
                });
            });
        };


    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
            
        });
        console.log(event.target.value)
    } 



    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="name" onChange={this.handleChange} placeholder="Enter Name" ></input>
              <input type="number" name="age" onChange={this.handleChange} placeholder="Enter Age" ></input>
              <input type="email" name="email" onChange={this.handleChange} placeholder="Enter Email" ></input>
              <button type="submit">.push()</button>
            </form>
        )
    }


}
