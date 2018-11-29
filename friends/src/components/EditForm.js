import React from 'react';
import PropTypes from 'prop-types';

class EditForm extends React.Component {
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

    handleEdit = event => {
        event.preventDefault();
        this.props.updateFriend(
            { 
                name: this.state.nameText,
                age: this.state.ageText, 
                email: this.state.emailText,
            }, 
            this.props.id
            );
            this.setState({
                nameText:'',
                ageText: '',
                emailText:'',
            });
    }

    render() {
        return (
            <div className={this.props.shouldEdit ? 'editform-container' : 'hide'}>
                <i className="fas fa-caret-up"></i>
                <form className='editform' onSubmit={this.handleEdit}>
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

EditForm.propTypes = {
    nameText: PropTypes.string,
    ageText: PropTypes.number,
    emailText: PropTypes.string,
}

export default EditForm;