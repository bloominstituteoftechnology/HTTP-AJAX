import React, {Component} from 'react'
import axios from 'axios';

class FriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    };

    render() {
        return (
        <div>
            <div className="friend-title">Add new friend</div>
            {/* <form onSubmit={this.handleSubmit}> */}
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder="SERGEY" name="name" value={this.state.name} onChange={this.handleOnChange} />

                <label htmlFor="age">AGE: </label>
                <input type="text" placeholder="None of your..." name="age" value={this.state.age} onChange={this.handleOnChange} />

                <label htmlFor="email">EMAIL: </label>
                <input type="text" placeholder="What's your email?" name="email" value={this.state.email} onChange={this.handleOnChange} />
                <button type="submit">ADD</button>
            </form>
        </div>
        )
    }

    handleOnChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (e.target.type === 'number') {
            value = Number(value);
        }

        this.setState({ [name]: value });
    };
      
    handleOnSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/friends', this.state)
          .then(response => {
              console.log('response:', response);
              this.setState({
                  name: '',
                  age: '',
                  email: '',
              })
          })
          .catch(error => {
              console.log('Error: ', error);
            });
    }
}


export default FriendForm;
