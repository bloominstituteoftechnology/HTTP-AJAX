import React, { Component } from 'react';

export default class FriendForm extends Component {

    render() {
        return(
                <div className="friend-form">
                        
                    <input
                    type="text"
                    onChange={this.props.handleTextInput}
                    placeholder="name"
                    name="name"
                    value={this.props.name}
                    />

                    <input
                    type="number"
                    onChange={this.props.handleTextInput}
                    placeholder="age"
                    name="age"
                    value={this.props.age}
                    />

                    <input
                        type="text"
                        onChange={this.props.handleTextInput}
                        placeholder="email"
                        name="email"
                        value={this.props.email}
                        />

                    <button onClick={this.props.saveNameData}>Save Friend</button>
                </div>
        )
    }
}