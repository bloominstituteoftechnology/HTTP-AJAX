import React, { Component } from 'react';
import axios from 'axios';

export default class FriendsForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            friendsData: []
        }
    }

    componentDidMount() {
		this.setState({
			friendsData: this.props
		});
}

  render() {

    
    console.log('What is THIS: ', friendsData);

    return (
       <div className="friends-form"> 
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Age:
                <input type="text" name="age" />
            </label>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <input type="submit" value="Submit" />
        </form>
       </div>
    );
  }
}
 
