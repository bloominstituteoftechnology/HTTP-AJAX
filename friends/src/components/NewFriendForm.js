import React from 'react';



class NewFriendForm extends React.Component {
    constructor() {
        super()
        this.state ={
            name: '',
            age: '',
            email: ''

        }
    }

    handleInputChange = event => {
        
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    render() {
    return(
        <div>
           
            <div className='friends-form'>
                <form className='new-friends-form'>
                    <input 
                        className='name'
                        name='name'
                        onChange={this.handleInputChange}
                        placeholder='Name'
                        type='text'
                        value={this.state.name}
                    />

                    <input 
                        className='age'
                        name='age'
                        onChange={this.handleInputChange}
                        placeholder='Age'
                        type='number'
                        value={this.state.age}
                    />

                    <input 
                        className='email'
                        name='email'
                        onChange={this.handleInputChange}
                        placeholder='Email'
                        type='email'
                        value={this.state.email}
                    />

                </form>
                
            </div>
        </div>
    )
    }
}

export default NewFriendForm