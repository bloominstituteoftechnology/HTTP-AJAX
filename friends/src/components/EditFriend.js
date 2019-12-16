import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditFriend extends Component {
    constructor() {
      super();

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAgeChange = this.handleAgeChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);

      this.state = {
          id: 0,
          name: '',
          age: 0,
          email: ''
      };
    }

    componentDidMount() {
        this.setState({
            id: this.props.currentFriend[0],
            name: this.props.currentFriend[1],
            age: this.props.currentFriend[2],
            email: this.props.currentFriend[3],
        });
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleAgeChange(e) {
        this.setState({age: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <form onSubmit={(e) => this.props.editFriendHandleSubmit(e, this.state.id, this.state.name, this.state.age, this.state.email)}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Age:
                        <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default EditFriend;