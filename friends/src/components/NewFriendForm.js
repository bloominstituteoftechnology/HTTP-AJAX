import React, {Component} from 'react'
import { FriendFormContainer} from './styledComponents'


class NewFriendForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value
        })

    }

    handleClick = (e) =>{
        e.preventDefault()
        //create friend object to pass to api
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        //clear input boxes
        this.setState({name: '',age: '', email: ''})

        this.props.addFriend(friend)

    }

    render(){
        return(
            <FriendFormContainer>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" name="age" onChange={this.handleChange} value={this.state.age}/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                    <button>Add Friend</button>
                </form>
            </FriendFormContainer>
        )
    }



}

export default NewFriendForm;