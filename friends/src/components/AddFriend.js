import React, { Component } from 'react'
import PropTypes from 'prop-types'


class AddFriend extends Component {
    constructor() {
        super();
        this.state = {
            id:0,
            inputName: "",
            inputAge: 0,
            inputEmail: "",
        }
    }

    nameChange = event => {
        this.setState({ inputName: event.target.value })
    }

    
    ageChange = event => {
        this.setState({ inputAge: event.target.value })
    }

    emailChange = event => {
        this.setState ({ inputEmail: event.target.value })
    }


    formHandler = event => {
        event.preventDefault();
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!this.state.inputName  
            || !this.state.inputEmail) {
            alert("Name or Email can't be blank!")
        }
        if(this.state.inputAge <= 18){
            alert("You're too young to be my friend")
        }
        if(!filter.test(this.state.inputEmail)) {
            alert("Need a valid email address")
        }
        else {
            this.props.handler({ 
                id:this.state.id,
                name:this.state.inputName, 
                age: this.state.inputAge,
                email: this.state.inputEmail
            })
        }
        this.setState({ 
            inputName: "",
            inputAge: 0,
            inputEmail: ""
         })
    }

    render(){
        return (
            <form>
                Add a new friend: <br/>
                Name: <input 
                        type="text" 
                        placeholder="Name"
                        onChange = {this.nameChange}
                        value= {this.state.inputName}
                        ></input>

                        <br/>

                Age: <input 
                        type="text"
                        onChange = {this.ageChange}
                        value={this.state.inputAge}
                        />

                        <br/>

                Email: <input 
                        type="email" 
                        placeholder="Email"
                        onChange = {this.emailChange}
                        value = {this.state.inputEmail}
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