import React, {Component} from 'react';
import axios from 'axios';
import Friend from "./Friend";
import './Friends.css';

class Friends extends Component{
    constructor(){
        super()
        this.state= {
            friends: [],
            name: '',
            age: '',
            email: '',
            id: 0,
        }
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(response =>{
                console.log(response.data)
                this.setState({
                    friends: response.data,
                    id: response.data.length
                })
            })
            .catch(err => console.log(err));
    }

    inputHandle = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.email)
    }

    submitHandle = (event) =>{
        axios
            .post('http://localhost:5000/friends',{
                id: this.state.id +1,
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            })
            .then(response =>{
                console.log(response);
                this.setState({
                    name: "",
                    age: "",
                    email: "",
                    id: this.state.friend.length
                })
            })
            .catch(err =>{
                console.log(err);
            })
    }

    render(){
        return(
            <div className='mainCont'>
                <div className='friendList'>
                    <h1>Friends List</h1>
                    <div className='friendCard'>
                        {this.state.friends.map(item => {
                            return (<Friend key={item.id} friend={item}/>)
                        })}
                    </div>
                </div>
                <h1 className='formTitle'>Add a Friend</h1>
                <form className='addForm'>
                    <span>Name: </span><input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.inputHandle}></input>
                    <span>Age: </span><input type='text' placeholder='Age' name='age' value={this.state.age} onChange={this.inputHandle}></input>
                    <span>Email: </span><input type='text' placeholder='Email' name='email' value={this.state.email} onChange={this.inputHandle}></input>
                </form>
                <input type='submit' onClick={this.submitHandle}></input>
            </div>
        )
    }
}

export default Friends