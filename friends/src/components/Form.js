import React from 'react';
import PropTypes from 'prop-types';

// const Form = props => {

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameText:'',
            ageText: '',
            emailText:'',
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleAdd = event => {
        event.preventDefault();
        this.props.addFriend(
            { 
                name: this.state.nameText,
                age: this.state.ageText, 
                email: this.state.emailText,
            }, 
        );
        this.setState({
            nameText:'',
            ageText: '',
            emailText:'',
        });
    }

    render() {
        return (
            <div className='form-container'>
                <p className='form-title'> Add a New Friend!</p>
                <form className='form' onSubmit={this.handleAdd}>
                    <input 
                        type='text' 
                        name='nameText' 
                        placeholder='Name' 
                        value={this.state.nameText} 
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        type='number' 
                        name='ageText' 
                        placeholder='Age' 
                        value={this.state.ageText} 
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        type='email' 
                        name='emailText' 
                        placeholder='E-mail' 
                        value={this.state.emailText} 
                        onChange={this.handleChange}
                        required
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    nameText: PropTypes.string,
    ageText: PropTypes.number,
    emailText: PropTypes.string,
}

export default Form;