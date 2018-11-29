import React from 'react'
import './App.css'
import axios from 'axios'
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            friends: [],
            nameInput: '',
            ageInput: null,
            emailInput:''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then((response) => {
                this.setState(() => ({ friends: response.data }));
             })
            .catch(error => {
                console.error('Server Error', error);
            });
    }
    nameHandler = event =>{
        this.setState({
            nameInput: event.target.value,
        })
    }
    ageHandler = event => {
        this.setState({
            ageInput: event.target.value,
        })
    }
    emailHandler = event => {
        this.setState({
            emailInput: event.target.value,
        })
    }
    postFriend = (friends) => {
        axios.post('http://localhost:5000/friends', friends)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    addFriend = event =>{
        this.postFriend({'name':`${this.state.nameInput}`,'age':`${this.state.ageInput}`, 'email':`${this.state.emailInput}`});
    }
    render(){
        return(
            <form className = 'form' onSubmit = {this.addFriend}>
                <h1>ADD A FRIEND</h1>
                name:<input 
                type = 'text' 
                value = {this.state.nameInput}
                onChange = {this.nameHandler}
                />
                Age:<input 
                type = 'text'
                value ={this.state.ageInput}
                onChange ={this.ageHandler}
                
                />
                Email:<input 
                type = 'text'
                    value={this.state.emailInput}
                onChange={this.emailHandler}
                />
                <button>Submit</button>
            </form>
        )
    }
}
export default Form 