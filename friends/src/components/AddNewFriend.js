import React, { Component } from 'react';

export default class AddNewFriend extends Component{
    constructor(props){
        super(props);
        this.state= {
            friend: {
                name: '',
                age: '',
                email: '',  
            }

        }
    }

    changeHandler = e => {
        this.setState({
        friend: {
            ...this.state.friend,
            [e.target.name]: e.target.value
        }
        })

    }

    addHandler = e =>{
        e.preventDefault();
        this.props.addFriend(this.state.friend)
    }

    render() {
        return (
            <div className="addfriendform">
                <h1>Add New Friend Form</h1>
                <form onSubmit={this.addHandler}> 
                <input 
                    type = "text"
                    name = "name"
                    placeholder = "Name"
                    onChange= {this.changeHandler}
                    value = {this.state.friend.name}
                    />
                <input 
                    type = "number"
                    name = "age"
                    placeholder = "Age"
                    onChange= {this.changeHandler}
                    value = {this.state.friend.age}
                    />
                <input 
                    type = "email"
                    name = "email"
                    placeholder = "Email"
                    onChange= {this.changeHandler}
                    value = {this.state.friend.email}
                    />
                    <button type= "submit">ADD</button>
                </form>
            </div>

        )

}
}