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
        const target = event.target;
        this.setState({ [event.target.name]: event.target.value })
    }

    // handleInputData = (event) => {
    //     //const target = event.target;
    //     this.setState({ [event.target.age]: event.target.value })
    // }

    // handleInputData = (event) => {
    //     //const target = event.target;
    //     this.setState({ [event.target.email]: event.target.value })
    // }

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