import React, {Component} from 'react';
import './Friend.css';

class Friend extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            age: '',
            email: ''
        }
    }

    inputHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.name)
    }

    updateFriendHandler= (event) =>{
        event.preventDefault()
        const id = this.props.id
        this.props.updateHandler( id, this.state.name, this.state.age, this.state.email)
    }

    render(){
        return(
            <div>
                <ul className='singleFriend'>
                    <li className='friendName'>{this.props.friend.name}</li>
                    <li>Age: {this.props.friend.age}</li>
                    <li>Email: {this.props.friend.email}</li>
                    <li className='deleteButton' onClick={this.props.deleteHandler(this.props.friend.id)}>Delete</li>
                </ul>
                <form onSubmit={this.updateFriendHandler}>
                    <span>Name: </span><input type="text" name='name' onChange={this.inputHandler} ></input>
                    <span>Age: </span><input type="text" name='age' onChange={this.inputHandler} ></input>
                    <span>Email: </span><input type="text" name='email' onChange={this.inputHandler} ></input>
                    <input type ='submit' value='Update' ></input> 
                </form>
            </div>
        )
    }
}

export default Friend