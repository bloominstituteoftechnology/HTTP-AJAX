import React from 'react'
import Axios from 'axios';

const baseURL = "http://localhost:5000/"

export default class FriendsForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }
    
    inputHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let friend = this.state;
        Axios.post(baseURL + "friends" , friend)
            .then((res) => {
                this.props.setAppState({friends: res.data})
                this.setState({name: "", age: "", email: ""})
            })
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.inputHandler}
                ></input>
                <input 
                    type="text"
                    name="age"
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.inputHandler}
                ></input>
                <input 
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.inputHandler}
                ></input>
                <button 
                    type="submit"
                    onClick={this.handleSubmit}
                >Add Friend</button>
            </div>
        )
    }
}