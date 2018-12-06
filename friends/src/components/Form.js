import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            age: 0,
            email: ''
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      submitChange = event => {
          event.preventDefault();
          this.props.addFriend(this.state);
      }

    render() {
        return (
            <div className='friend-form'>
            <form onSubmit={this.submitChange}>
                <input
                onChange={this.handleChange}
                name='name'
                type='text'
                placeholder={`Friend's Name..`}
                value={this.state.name}
                />

                <input
                onChange={this.handleChange}
                name='age'
                type='number'
                placeholder={`Friend's Age..`}
                value={this.state.age}
                />

                <input
                onChange={this.handleChange}
                name='email'
                type='text'
                placeholder= {`Friend's Email..`}
                value={this.state.email}
                />

                <button type='submit'>Add Friend</button>
            </form>
            </div>
        )
    }
}

export default Form;

