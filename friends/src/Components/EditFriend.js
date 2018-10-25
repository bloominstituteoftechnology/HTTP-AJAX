import React, {Component} from 'react';

class EditFriend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: "",
            email: ""
        };
    }

    render() {
        return(
            <div>Edit</div>
        );
    };
};

export default EditFriend;