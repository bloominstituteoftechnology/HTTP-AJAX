import React, { Component } from 'react'

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
        this.props.handler({ 
            id:this.state.id,
            name:this.state.inputName, 
            age: this.state.inputAge,
            email: this.state.inputEmail
        })
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
                        value = {this.state.inputName}
                        ></input>

                        <br/>

                Age: <input 
                        type="text"
                        value = {this.state.inputAge}
                        onChange = {this.ageChange}
                        />

                        <br/>

                Email: <input 
                        type="text" 
                        placeholder="Email"
                        onChange = {this.emailChange}
                        /> 
                        <br/>

                <button onClick = {this.formHandler}>Submit</button>
            </form>
        )
    }
}

export default AddFriend;