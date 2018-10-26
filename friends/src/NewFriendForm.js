import React from 'react';

class NewFriendForm extends React.Component{
    constructor(){
       super()
       this.state = {
          name : '',
          age : '', 
          email: '',
        }
    }
    handleChange = (event) =>{
        this.setState({
          [event.target.name] : event.target.value
        })
      }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.addFriend({...this.state})
        event.target.reset()
        this.setState({
            name: '',
            age: '',
            email: '',
        })
    } 
    render(){
        return(
            <form onSubmit = {this.handleSubmit} className = 'add-form-container'>
                <div className = 'add-form-header'>
                    <h2>New Friend Form</h2>
                </div>    

                <input onChange = {this.handleChange} name = 'name' type = 'text' placeholder = '...Feed me a new friend name'/>
                <input onChange = {this.handleChange} name = 'age' type = 'text' placeholder = '...And their age' />
                <input onChange = {this.handleChange} name = 'email' type = 'text' placeholder = '...As well as an email address' />
                <button type = 'submit'>Add dat friend</button>
            </form>
        )
    }    
}

export default NewFriendForm;