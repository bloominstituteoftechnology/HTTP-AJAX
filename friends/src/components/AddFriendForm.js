import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class AddFriendForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    modifyInput = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    };
    
    formSubmit = (event) => {
        event.preventDefault()
        const newInput = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email,
            id: this.props.friends.length + 1
        }
        this.props.addFriend(newInput)
        this.setState({
            name: '',
            age: '',
            email: ''
    })
  }
    
    render() {
        return (
            <form onSubmit={this.formSubmit}>
                
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.state.modifyInput}
                />
                <input 
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.state.modifyInput}
                />
                <input 
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.state.modifyInput}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}



AddFriendForm.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
            email: PropTypes.string,            
            id: PropTypes.number
        })
    )
};

export default AddFriendForm;