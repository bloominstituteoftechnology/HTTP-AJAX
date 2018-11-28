import React, { Component } from 'react';
import axios from 'axios';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            name: ''
        };
    }

    // handleChange = event => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // click = event => {
    //     event.preventDefault();

    //     const myData = {
    //         name: this.state.name
    //     }
    //     console.log("yeahhh")
    //     axios
    //     .post('http://localhost:5000/friends', {myData})
    //     .then(response => {
    //       console.log(response)
    //     //   this.setState({ 
    //     //     data: response.data
    //     //   });
    //     })
    //     .catch(err => console.log(err));
    // }

    render() {
        // console.log('state name from render', this.state.name)
        return (
        <div>
            <form onSubmit={this.props.click}>
                <label>
                    Name:
                    <input type="text" name="name" 
                    onChange={this.props.handleChange} />
                    </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}

export default MyForm;