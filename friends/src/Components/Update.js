import React, { Component } from 'react';
import FriendsComponent from './FriendsComponent';
import axios from 'axios';

class UpdateForm extends Component {
    constructor(props){
    super(props)
    
    this.state = {
        name: '',
        age: '',
        email: '',
        id: ''
    }     
}
    componentWillReceiveProps = (nextProps, previousProps) => {
        console.log(nextProps);
        if(nextProps.friends !== previousProps.friends){
            let newInfo = nextProps.friends.filter(friend => {
                
                return friend.id === parseInt(nextProps.match.params.id)})[0]
            
            console.log(newInfo);
            this.setState({name: newInfo.name, age: newInfo.age, email: newInfo.email, id: parseInt(nextProps.match.params.id)});
        }
    }
    
    handleChange = (el) => {
        this.setState({ 
            [el.target.name]: el.target.value
        })
    }

render() {
    const {name, age, email} = this.state 
    console.log(this.props)
    return (
        <div>
            <input type= 'text' placeholder='name' name= 'name' value= {name} onChange={el => this.handleChange(el)}/>
            <input type= 'text' placeholder='age' name= 'age' value= {age} onChange={el => this.handleChange(el)}/>
            <input type= 'text' placeholder='email' name= 'email' value= {email} onChange={el => this.handleChange(el)}/>
            <button onClick={() => this.props.updateFriend(this.state)}>Update</button>
            {/* <button onClick={this.updateFriend(friend.id)}>Update Info</button> */}
            
        </div>
        )
    }

}

export default UpdateForm;