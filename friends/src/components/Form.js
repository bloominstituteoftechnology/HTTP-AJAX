import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state= {
            name: '',
            age: 0,
            email: ''
        }
    }

    render() {
        return (
            <div className='friend-form'>
            <form>
                <input
                name='name'
                type='text'
                placeholder={`Friend's Name..`}
                value={this.state.name}
                />

                <input
                name='age'
                type='number'
                placeholder={`Friend's Age..`}
                value={this.state.age}
                />

                <input
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

