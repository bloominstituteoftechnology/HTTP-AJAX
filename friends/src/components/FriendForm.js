import React from 'react' ;
import axios from 'axios' ;
import './my-css.css' ;


class FriendForm extends React.Component{
    constructor() {
        super() ;
        this.state ={
            name: "",
            age: "",
            email: ""
        }
    }
    
    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });     
    }

    handleSave = event => {
        alert("handleSave ran");
        axios
            .post("http://localhost:5000/friends", this.state)
                .then(response => {
                    console.log("MY-POST-RESPONSE: ", response)
                })
                .catch(error => {
                    alert('server error! (see console)') ;
                    console.log("MY-POST-ERROR: ", error) ;
                })
        this.setState({ name: '', age: '', email: '' })
    }

    render() {
        return(
            <div className="form" >
                <h3 ><u>Enter New Friend Below</u></h3>
                <form action="">
                    <input 
                        type="text" 
                        placeholder="Name"
                        onChange={this.handleInput}
                        name="name"
                        // value={this.state.name}
                    />
                    <input 
                        type="number" 
                        placeholder="Age"
                        onChange={this.handleInput}
                        name="age"
                        // value={this.state.age}    
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        onChange={this.handleInput}
                        name="email"
                        // value={this.state.email}    
                    />
    
                    <button onClick={this.handleSave}>Save</button>
                </form>
                <br/>
            </div>
        )
    }
}
export default FriendForm ;
