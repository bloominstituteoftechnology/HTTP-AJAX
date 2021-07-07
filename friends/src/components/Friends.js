import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend'
import { Table } from 'reactstrap';
import './Friends.css'



class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: "",
            age: "",
            email: ""
        }
    }

    componentDidMount() {
        this.updateInfo(); 
    }
    updateInfo = () => { //by putting GET request in a separate function, you have more control over it
        axios.get("http://localhost:5000/friends")
        .then((response => this.setState({ friends: response.data })))
        .catch((err) => this.setState({ errCode: err }))
    }


    handleFormChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitFriend = (e) => { 
        e.preventDefault(); // without this the whole page refreshes once you enter new friend and you never get to see POST request in network tab of dev tools. More importantly it allows you to have CONTROL over GET requests!!! 
        const newFriend = {  
            name: this.state.name,
            age: this.state.age,
            email: this.state.email 
        }
       
        axios.post("http://localhost:5000/friends", newFriend) 
            .then((res) => { 
                console.log(res.data)
                // this.updateInfo(); //this is another way of achieving same result as below method. It fetches updated friends array
                this.setState({friends: res.data})
            })
            .catch((err) => {console.log(err)})
        this.setState({ name: "", age: "", email: "" })  
    }

    render() {
        console.log(this.props)
        const headerStyle = {
            color: "blue",
            display: "flex",
            justifyContent: "space-around",
            paddingRight: "80px",
            margin: "30px 0px",
            fontWeight: "bold",
            fontSize: "25px"
        }

        const formStyle = {
            margin: "20px",
        }

        const mainStyle = {
            width: "75%",
            margin: "0 auto"
        }

        return (
            //    (this.state.friends.length > 0)  HOW TO ADD CONDITIONAL LOGIC
            <div style={mainStyle}>
                <form style={formStyle} >
                    <input onChange={this.handleFormChange} type="text" placeholder="Name" name="name" value={this.state.name} style={formStyle}></input>
                    <input onChange={this.handleFormChange} type="text" placeholder="Age" name="age" value={this.state.age} style={formStyle}></input>
                    <input onChange={this.handleFormChange} type="text" placeholder="Email" name="email" value={this.state.email} style={formStyle}></input>
                    <button onClick={this.handleSubmitFriend}>Submit</button>
                </form>
                <div style={headerStyle}>
                    <div>Name</div>
                    <div>Age</div>
                    <div>Email</div>
                </div>
                <div>
                    {this.state.friends.map((friend, index) => { return <Friend  updateFriends={this.updateInfo} key={friend.name + index} friend={friend} /> })}
                </div>
            </div>
        )
    }
}



export default Friends;