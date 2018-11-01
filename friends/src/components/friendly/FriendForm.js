import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            allFriends: []
        };
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text' 
                        name='nameTemp' 
                        onChange={this.props.onChangeHandler}
                        className='friendForm-input_name'
                        placeholder='What is their name?'
                        value={this.props.nameTemp}
                    />

                    <input 
                        type='text' 
                        name='ageTemp' 
                        onChange={this.props.onChangeHandler}
                        className='friendForm-input_age'
                        placeholder='What is their age?'
                        value={this.props.ageTemp}
                    />

                    <input 
                        type='text' 
                        name='emailTemp' 
                        onChange={this.props.onChangeHandler}
                        className='friendForm-input_email'
                        placeholder='What is their email?'
                        value={this.props.emailTemp}
                    />

                    <button onClick={this.props.clickHandler} className="addFriend button">Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;