import React, { Component } from 'react';


class Friend extends Component {
    constructor() {
        super()
        this.state = {
            Friend : {
                name: '',
                age: '',
                email: '',
            }
        }
    }

    render() {
        // console.log(this.props)
        return (
            <div className="Friends__New-friend">
                <form onSubmit={this.props.handleSubmit}>
                    <fieldset>
                    <legend>New Friend Info</legend>
                        <div>
                            <label>Name</label>
                            <input onChange={this.props.handleChange} value={this.props.Friend.name} type="text" name="name" placeholder="Enter Name"/>
                        </div>
                        <div>
                            <label>Age</label>
                            <input onChange={this.props.handleChange} value={this.props.Friend.age} type="number" name="age" placeholder="Age"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input onChange={this.props.handleChange} value={this.props.Friend.email}  type="email" name="email" placeholder="Enter Email"/>
                        </div>
                        <button>Add</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Friend