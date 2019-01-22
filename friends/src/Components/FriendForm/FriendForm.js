import React, {Component} from 'react';
import axios from 'axios';

import './FriendForm.css'

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            age:'',
            email:'',
            location: this.props.location? this.props.location.pathname.split('/').reverse()[0]:null
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

    editHandeler= event=>{
        console.log(event);
        event.preventDefault();
        axios.put(`http://localhost:5000/friends${this.props.match.params.id}`,{
            name:this.state.name,
            age:this.state.age,
            email:this.state.email
        })
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }

    render() { 
        //changes which handler to use based off the route
        const handler = this.state.location==='update'?  this.editHandeler:this.submitHandler;
        return ( 
            <form className="form-wrapper" onSubmit={handler}>
                <input type="text" 
                    className="input"
                    name="name"  
                    placeholder="enter your friend's name" 
                    value={this.state.name}
                    onChange= {this.changeHandler}
                    onSubmit={handler}
                />

                <input type="text" 
                    className="input"
                    name="age"  
                    placeholder="enter your friend's age" 
                    value={this.state.age}
                    onChange= {this.changeHandler}
                    onSubmit={handler}
                />

                <input type="text" 
                    className="input"
                    name="email"  
                    placeholder="enter your friend's email" 
                    value={this.state.email}
                    onChange= {this.changeHandler}
                    onSubmit={handler}
                />

                <button className="btn" onClick={handler}>{this.state.location==='update'?`Edit Friend!`:`Add A Friend!`}</button>
            </form>
        );
    }
}
 
export default FriendForm;