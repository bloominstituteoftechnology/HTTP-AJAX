import React from "react";

class FriendlyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            name: '',
            email:'',
            age: 0
        };
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitHandler = event => {
        event.preventDefault();
        if (this.props.edit) {
            this.props.editFriend(
                this.state,
                this.props.match.params.id
            );
        } else {
            this.props.addNewFriend(this.state);
        }
        this.props.history.push('/friends-list')
    };

    render() {
        return (
            <div className='friendly-form'>
            
            </div>
        );
    }

}

export default FriendlyForm;