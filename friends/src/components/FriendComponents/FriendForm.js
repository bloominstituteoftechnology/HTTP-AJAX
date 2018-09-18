import React from 'react';
import axios from 'axios';
class FriendForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: "",
            age: "",
            email: ""
        };

    }
    
        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
                });
          }

          
        
          handleSubmit = (event) => {
            event.preventDefault()
            const newFriend = {
              name: this.state.name,
              age: Number(this.state.age),
              email: this.state.email,
            }
            this.props.addFriend(newFriend);
            
            this.setState({
              name: '',
              age: '',
              email: ''
            })
          }


    render(){    
        return(
            <div>
                <button onClick={this.handleSubmit} type="submit" >Add Friend</button>
                <div>
                    <form>  
                        <input onChange={this.handleChange} name="name" value={this.state.name} placeholder="NAME"/>
                        <label>NAME</label>
                        <input onChange={this.handleChange} name="age" value={this.state.age} placeholder="AGE"/>
                        <label>AGE</label>
                        <input onChange={this.handleChange} name="email" value={this.state.email} placeholder="EMAIL"/>
                        <label>EMAIL</label>
                    </form>
                </div>
        </div>
        );
    }
}

export default FriendForm;

