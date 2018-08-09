import React, { Component } from 'react';
import axios from 'axios';

export default class Friends extends Component {
    constructor(){
        super();
        this.state = {
            friends: [],
            newName: '',
            newAge: '',
            newEmail: ''
        }
    }
    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(response => {
            this.setState(() => ({ friends: response.data }));
          })
          .catch(error => {
            console.error('Server Error', error);
          });
    }

    handleName = e =>{
        this.setState({newName: e.target.value})
    }

    handleAge = e =>{
        this.setState({newAge: e.target.value})
    }

    handleEmail = e =>{
        this.setState({newEmail: e.target.value})
    }

    handleSubmit = e =>{
        e.preventDefault();

        const newFriend = {
            name: this.state.newName,
            age: this.state.newAge,
            email: this.state.newEmail
        }

        axios
            .post('http://localhost:5000/friends', newFriend)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({friends: res.data, newName: '', newAge: '', newEmail: ''})
            })
            .catch(err => {
                console.log(err);
            })
            
    }

    render(){
        return(
            <div>
                <h1>Muh Frans!</h1>
                {this.state.friends.map(data => 
                <div>
                    <h2>{data.name}</h2>
                    <p><span className="fr-sub-hdr">Age: </span><span>{data.age}</span></p>
                    <p><span className="fr-sub-hdr">Email: </span><span>{data.email}</span></p>
                </div>
                )}
                <form onSubmit = {this.handleSubmit}>
                    <span>Name:</span>
                    <input onChange = {this.handleName} />
                    <span>Age:</span>
                    <input onChange = {this.handleAge} />
                    <span>Email:</span>
                    <input onChange = {this.handleEmail} />
                    <button>Add Friend</button>
                </form>                    
            </div>
        )
    }
}