import React, { Component } from 'react';
import axios from 'axios';

export default class FriendsForm extends Component {

    
  render() {

    return (
       <div className="friends-form"> 
        <form>
            <label>
                Name:
                <input type="text" name="name" value={this.props.name} />
            </label>
            <label>
                Age:
                <input type="text" name="age" value={this.props.age}/>
            </label>
            <label>
                Email:
                <input type="text" name="email" value={this.props.email}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
       </div>
    );
  }
}
 
