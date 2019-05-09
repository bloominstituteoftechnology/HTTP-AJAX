import React from 'react';


class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''

        };
    }

    render() {
        return (
            <div>
                <form className="friend-form">
                    <input placeholder="name" />
                    <input placeholder="age" />
                    <input placeholder="email" />
                </form>
            </div>
        )
    }
}



export default FriendForm;