import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        }
    }

    render() {
        return (
            <form>
                <input></input>
                <button>Add</button>
            </form>
        )
    }
}

export default FriendForm;