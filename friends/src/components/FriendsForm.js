import React, { Component } from 'react';

export default class FriendsForm extends Component {

    
  render() {

    return (
       <div className="friends-form"> 
        <form onSubmit={(e) => this.props.submit(e)}> 
            <label>
                Name:
                <input type="text" name="name" value={this.props.name} onChange={this.props.input}/>
            </label>
            <label>
                Age:
                <input type="number" name="age" value={this.props.age} onChange={this.props.input}/>
            </label>
            <label>
                Email:
                <input type="email" name="email" value={this.props.email} onChange={this.props.input}/>
            </label>
            <input type="submit" value="submit" />
        </form>
       </div>
    );
  }
}
 
