import React from 'react';



class NewFriendForm extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            name: '',
            age: null,
            email: ''

        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.addNewFriend(this.state)
        this.props.history.push('/friends');
    }
  
    
    render() {
    return(
        <div>
           
            <div className='friends-form'>
                <form onSubmit={this.submitHandler} className='new-friends-form'>
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
                    <button>ADD FRIEND</button>
                </form>
                
            </div>
        </div>
    )
    }
}

export default NewFriendForm