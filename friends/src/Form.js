import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            "name": '',
            "age": '',
            "email": ''
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/friends',
            data: {
                "name": `${this.state.inputText}`,
                "age": this.state.age,
                "email": `${this.state.email}`
            }
        })
        this.setState({
            inputText: '',
            age: '',
            email: ''
        })
    }

    //   componentDidUpdate() {
    //     axios
    //       .get('http://localhost:5000/friends')
    //       .then(response => {
    //         this.setState({friends: response.data})
    //       })
    //       .catch(err => console.log(err))
    //   }


    render() {

        return (
            <form>
                <input name="name" placeholder="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                <input name="age" placeholder="age" value={this.state.age} onChange={e => this.handleChange(e)} />
                <input name="email" placeholder="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                <button type="submit" onClick={this.handleSubmit}>Add Friend</button>
            </form>
        )
    }


}




export default Form;