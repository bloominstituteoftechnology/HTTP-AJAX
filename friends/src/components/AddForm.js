import React, { Component } from 'react';



export default class App extends Component {

    constructor() {
        super();


    }
    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <br/>
                    <input type="text" name="name" onChange={this.props.input} />
                    <br/>
                    <label>Age</label>
                    <br/>
                    <input type="number" name="age" onChange={this.props.input} /> 
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input type="email" name="email" onChange={this.props.input} /> 
                    <br />
                    
                    <button> Submit </button>
            </form>
            </div>
        )
    }
}