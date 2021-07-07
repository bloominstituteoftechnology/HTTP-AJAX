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
                this.setState({
                    friends: response.data,
                })
            })
            .catch(err => console.log(err));
    }

    inputHandle = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandle = (event) =>{
        event.preventDefault()
        axios
            .post('http://localhost:5000/friends',{
                friend:{
                    name: this.state.name,
                    age: this.state.age,
                    email: this.state.email
                }
            })
            .then(response =>{
                this.setState({
                    friends: response.data,
                    name: "",
                    age: "",
                    email: "",
                })
            })
            .catch(err =>{
                console.log(err);
            })
    }

    deleteHandler = (id) =>{
        return () =>{
            axios
                .delete(`http://localhost:5000/friends/${id}`)
                .then( response => {
                    this.setState({friends: response.data})
                })
                .catch( err => console.log(err))
        }
        
    }

    updateHandler = (id, name, age, email) =>{
        axios
            .put(`http://localhost:5000/friends/${id}`,{ 
                name: name,
                age: age,
                email: email,
            })
            .then(response =>{
                this.setState({
                    friends: response.data,
                    name: "",
                    age: "",
                    email: "",
                })
            })
            .catch( err => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className='mainCont'>
                <div className='friendList'>
                    <h1>Friends List</h1>
                    <div className='friendCard'>
                        {this.state.friends.map(item => {
                            return (<Friend key={item.id} id={item.id} friend={item} deleteHandler={this.deleteHandler} updateHandler={this.updateHandler}/>)
                        })}
                    </div>
                </div>
                <h1 className='formTitle'>Add a Friend</h1>
                <form className='addForm'>
                    <span>Name: </span><input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.inputHandle}></input>
                    <span>Age: </span><input type='text' placeholder='Age' name='age' value={this.state.age} onChange={this.inputHandle}></input>
                    <span>Email: </span><input type='text' placeholder='Email' name='email' value={this.state.email} onChange={this.inputHandle}></input>
                    <input type='submit' onClick={this.submitHandle}></input>
                </form>
                
            </div>
        )
    }
}

export default Friends