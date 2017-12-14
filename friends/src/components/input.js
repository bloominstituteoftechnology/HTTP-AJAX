import React, { Component } from 'react';

export default class CreateEntry extends Component {
    createEntry() {
        var unserinput = this.refs.inputText.value;
    }
    render() {
        return(
            <div>
                <input type="text"/>
                <button onClick={this.createEntry.bind(this)}>SUBMIT</button>
            </div>
        );
    }
}