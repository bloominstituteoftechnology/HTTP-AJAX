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

    modifyInput = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    };
    
    
    render() {
        return (
            <form className="form-container">
                
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.modifyInput}
                />
                <input 
                    id="age"
                    type="number"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.state.modifyInput}
                />
                <input 
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.modifyInput}
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