import React from 'react'; 

import {Link} from 'react-router-dom'; 


class NewFriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {}

    }

    render () {
        // console.log(this.props); 
        return (
            <div>
                <Link to = '/'>Return to Main Page</Link>
                <form>
                    <h1>Add New Friend</h1>
                    <h1>Name</h1>
                    <input  onChange = {this.props.handleChange} placeholder = "Enter name here" name = "name" value = {this.props.name}/>
                    <h1>Age</h1>
                    <input  onChange = {this.props.handleChange} placeholder = "Enter age here" name = "age" value = {this.props.age}/>
                    <h1>Email</h1>
                    <input  onChange = {this.props.handleChange} placeholder = "Enter name here" name = "email" value = {this.props.email}/>
                    <br/>
                    <button onClick = {this.props.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewFriendForm; 