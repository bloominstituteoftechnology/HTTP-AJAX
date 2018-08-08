import React from 'react'; 

//import {Link} from 'react-router-dom'; 


class NewFriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {}

    }

    render () {
        console.log(this.props); 
        return (
            <form>
                <header>Add New Friend</header>
                <h1>Name</h1>
                <input  placeholder = "Enter name here" name = "name" value = {this.props.name}/>
                <h1>age</h1>
                <input  placeholder = "Enter age here" name = "age" value = {this.props.age}/>
                <h1>email</h1>
                <input  placeholder = "Enter name here" name = "email" value = {this.props.email}/>
            </form>
        )
    }
}

export default NewFriendForm; 