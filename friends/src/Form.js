import React, {Component} from 'react'
import axios from 'axios';

class Friend extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { name, age, email } = this.state;

        axios.post('/', { name, age, email })
          .then((result) => {
            //access the results here....
          });
      }

    render() {
        const { name, age, email } = this.state;
        return (
        <div>
            {/* <form onSubmit={this.handleSubmit}> */}
            <form onSubmit={this.onSubmit}>
                <label htmlFor="title">Add Friend: </label>
                {/* <input name="name" placeholder="Name" type="text" 
                value={name} onChange={this.handleInputChange} />
                <input name="age" placeholder="Age" type="text"
                value={age} onChange={this.handleInputChange} />
                <input name="email" placeholder="Email Address" type="text"
                value={email} onChange={this.handleInputChange} /> */}
                <input type="text" name="name" value={name} onChange={this.onChange} />
                <input type="text" name="age" value={age} onChange={this.onChange} />
                <input type="text" name="email" value={email} onChange={this.onChange} />
                <button type="submit">Add Friend</button>
            </form>
        </div>
        )
    }
}


export default Friend;