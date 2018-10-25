import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: undefined,
            email: ''
        }
    }

    changeName = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    changeAge = (event)=>{
        this.setState({
            age: event.target.value
        })
    }

    changeEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    }

    addFriend = ()=>{
        this.props.addFriend(this.state.name, this.state.age, this.state.email);
    }

    render(){
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input onChange={this.changeName} type="text" placeholder="Enter friend's name..." value={this.state.name}/>
                    <label>Age:</label>
                    <input onChange={this.changeAge} type="number" placeholder="Enter friend's age..."/>
                    <label>Email:</label>
                    <input onChange={this.changeEmail} type="email" placeholder="Enter friend's email..." value={this.state.email}/>
                    <Link to="/" onClick={this.addFriend}>Submit</Link>
                </div>
            </div>
        )
    }
}

AddFriend.propTypes = {
    addFriend: PropTypes.func
}

export default AddFriend;