import React, { Component } from 'react'
import PropTypes from 'prop-types'


class AddFriend extends Component {
    constructor() {
        super();
        this.state = {
            newFriend: {
                id:0,
                name: "",
                age: 0,
                email: "",
            }
        }
    }

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.newFriend)
    }

    
    // ageChange = event => {
    //     this.setState({ inputAge: event.target.value })
    // }

    // emailChange = event => {
    //     this.setState ({ inputEmail: event.target.value })
    // }


    formHandler = event => {
        event.preventDefault();
        // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        // if(!this.state.inputName  
        //     || !this.state.inputEmail) {
        //     alert("Name or Email can't be blank!")
        // }
        // if(this.state.inputAge <= 18){
        //     alert("Go study small child!!!")
        // }
        // if(!filter.test(this.state.inputEmail)) {
        //     alert("Need a valid email address")
        // }
        // else {
            this.props.handler(this.state.newFriend)
            this.setState({ 
                newFriend: {
                    name: "",
                    age: 0,
                    email: ""
                }

            })
        // }
        // console.log(this.state.newFriend)
    }

    render(){
        return (
            <form>
                Add a new friend: <br/>
                Name: <input 
                        type="text" 
                        name = "name"
                        placeholder="Name"
                        onChange = {this.handleChange}
                        value= {this.state.newFriend.name}
                        ></input>

                        <br/>

                Age: <input 
                        type="text"
                        name = "age"
                        onChange = {this.handleChange}
                        value={this.state.newFriend.age}
                        />

                        <br/>

                Email: <input 
                        type="email" 
                        name = "email"
                        placeholder="Email"
                        onChange = {this.handleChange}
                        value = {this.state.newFriend.email}
                        /> 
                        <br/>

                <button onClick = {this.formHandler}>Submit</button>
            </form>
        )
    }
}

AddFriend.propTypes = {
	AddFriend: PropTypes.shape({
	    nameChange: PropTypes.string,
		inputAge: PropTypes.number,
		emailChange: PropTypes.string
	})
}

export default AddFriend;