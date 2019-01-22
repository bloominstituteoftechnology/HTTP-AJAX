import React, {Component} from 'react';
import axios from 'axios';

import './FriendForm.css'

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            age:'',
            email:''
        }
    }

     //set the state Based off the targets name
    changeHandler= event=>{
        this.setState({[event.target.name]: event.target.value})
    }


    submitHandler= event=>{
        console.log(event);
        event.preventDefault();
        axios.post('http://localhost:5000/friends',{
            name:this.state.name,
            age:this.state.age,
            email:this.state.email
        })
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }

    render() { 
        return ( 
            <form className="form-wrapper" onSubmit={this.submitHandler}>
                <input type="text" 
                    className="input"
                    name="name"  
                    placeholder="enter your friend's name" 
                    value={this.state.name}
                    onChange= {this.changeHandler}
                    onSubmit={this.submitHandler}
                />

                <input type="text" 
                    className="input"
                    name="age"  
                    placeholder="enter your friend's age" 
                    value={this.state.age}
                    onChange= {this.changeHandler}
                    onSubmit={this.submitHandler}
                />

                <input type="text" 
                    className="input"
                    name="email"  
                    placeholder="enter your friend's email" 
                    value={this.state.email}
                    onChange= {this.changeHandler}
                    onSubmit={this.submitHandler}
                />

                <button className="btn" onClick={this.submitHandler}>Add A Friend!</button>
            </form>
        );
    }
}
 
export default FriendForm;