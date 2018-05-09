import React, { Component } from 'react';


class FriendsForm extends Component{
    constructor(){
        super()
            this.state = {
                name: " ",
                age: " ",
                email: " "
            }
        }

    handleInputData = (event) => {
        //const target = event.target;
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitChange = (event) => {
        event.preventDefault();
        console.log("This was invoked in form component")
        const friends = this.state.friends;
        this.setState({ friends });
    };


    render(){
        return(
            <form>
                <label>
                    Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputData} />
                    age:
            <input type="text" name="age" value={this.state.age} onChange={this.handleInputData} />
                    email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputData} />
                </label>
                <button type="submit" onSubmit={this.handleSubmitChange}>Submit</button>
            </form>
        )
    }
}
export default FriendsForm;