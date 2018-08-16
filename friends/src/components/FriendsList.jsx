import React, {Component} from 'react';


class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
            url:props.url
         }
    }
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default Friends;