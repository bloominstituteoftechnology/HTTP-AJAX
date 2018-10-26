import React from 'react';
import styles from '../CSS/NewFriendForm.css';

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
                <div className = 'add-form-input-container'>    
                    <div className = 'add-form-input'>
                        <div className = 'input-title'> Name:
                            <input onChange = {this.handleChange} name = 'name' type = 'text' placeholder = '    Enter a new friend'/>
                        </div>
                    </div>
                    <div className = 'add-form-input'>
                        <div className = 'input-title'>Age:
                            <input className = 'age-input' onChange = {this.handleChange} name = 'age' type = 'text' placeholder = '    Add age of friend' />
                        </div>
                    </div>
                    <div className = 'add-form-input'>
                        <div className = 'input-title'>Email:
                            <input onChange = {this.handleChange} name = 'email' type = 'text' placeholder = '    Add email address' />
                        </div>
                    </div>
                    <button type = 'submit'>Add friend</button>
                </div>    
            </form>
        )
    }    
}

export default NewFriendForm;