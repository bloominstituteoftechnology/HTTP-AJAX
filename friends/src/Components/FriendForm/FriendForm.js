import React, {Component} from 'react';

import './FriendForm.css'

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend:{
                name:'',
                age:'',
                email:''
            }, 
            location: this.props.location? this.props.location.pathname.split('/').reverse()[0]:null
        }
    }

     //set the state Based off the targets name
    changeHandler= event=>{
        this.setState({
            friend:{
                ...this.state.friend,
                [event.target.name]: event.target.value}
            })
    }

    handleSubmission = event =>{
        event.preventDefault();
        this.props.submitHandler(this.state.friend)
    }

    render() { 
        //changes which handler to use based off the route
        const handler = this.state.location==='update'?  this.editHandeler:this.submitHandler;
        return ( 
            <form className="form-wrapper" onSubmit={this.handleSubmission}>
                <input type="text" 
                    className="input"
                    name="name"  
                    placeholder="enter your friend's name" 
                    value={this.state.name}
                    onChange= {this.changeHandler}
                />

                <input type="text" 
                    className="input"
                    name="age"  
                    placeholder="enter your friend's age" 
                    value={this.state.age}
                    onChange= {this.changeHandler}
                />

                <input type="text" 
                    className="input"
                    name="email"  
                    placeholder="enter your friend's email" 
                    value={this.state.email}
                    onChange= {this.changeHandler}
                />

                <button className="btn" onClick={handler}>{this.state.location==='update'?`Edit Friend!`:`Add A Friend!`}</button>
            </form>
        );
    }
}
 
export default FriendForm;