import React from 'react';
import axios from "axios";

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showEditForm: false,
            editedFriend:""
         };
    }


    render() { 
        return ( 
            <p>Friend</p>
         )
    }
}
 
export default Friend;