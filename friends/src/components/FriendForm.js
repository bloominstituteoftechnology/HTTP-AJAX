import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css'



class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friend:[],
            name: "",
            age: "",
            email: "",
            dateAdded: Date.now()
        }
    }

    componentDidMount(){
            this.fetchUsers()
          }
        
    fetchUsers = () => {
        axios.get('http://localhost:5000/friends')
        .then(response => this.setState({friend: response.data}))
        .catch( error => console.log(`${error}`))
          }
    handleTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })}

    handleSubmit = (e) => {
        const { name, age, email } = this.state
            axios.post('http://localhost:5000/friends', { name, age, email})
                .then( (response) => {
                    this.setState({ friend: response.data, name: '', age: '', email: ''})
            })
            .catch( err => console.log(`${err}`))
            }
        
    render() {
        return(
            <div>
            <div>
                <form className="input">
                    <input className="input-fields"name="name" type="text" placeholder="Name" onChange={this.handleTextChange} value={this.state.name} />
                    <input className="input-fields"name="age" type="text" placeholder="Age" onChange={this.handleTextChange} value={this.state.age}/>
                    <input className="input-fields"name="email" type="text" placeholder="Email" onChange={this.handleTextChange} value={this.state.email}/>
                </form>
                    <button className="submit-button" type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
                <div className="friend-ul">
            <ul >
              {this.state.friend.map(friend => {
            return <div key={friend.id} className="friend">
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </div>
                })}
              </ul>
              </div>
              </div>
            );
          }
        }
 
export default FriendForm;