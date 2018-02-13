import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    }

    onChange = (fc) => {
        const tempFriendslist = this.state;
        tempFriendslist[fc.target.name] = fc.target.value;
        this.setState(tempFriendslist);
    }

    onSubmit = (fc) => {
        fc.preventDefault();
        const { name, age, email } = this.state; 
        axios.post('http://localhost:5000/friends', { name, age, email })
        .then(result => this.setState({friends: result.data}));
    }

    render() {
        const { name, age, email } = this.state;
        return (
            <form onSubmit={this.onSubmit} className="af">
                <input name="name" value={name} onChange={this.onChange} placeholder="name" label="name" />
                <input name="age" value={age} onChange={this.onChange} placeholder="age" label="age" />
                <input name="email" value={email} onChange={this.onChange} placeholder="email" label="email"/>
                <button className="fs__button" >add friend</button>
            </form>
        )
    }
}


export default AddFriend;

// import React, { Component } from 'react';
// import axios from 'axios';

// class UserForm extends Component {
// constructor() {
//     super();
//     this.state = {
//     fname: '',
//     lname: '',
//     email: '',
//     };
// }

// onChange = (e) => {
//     // Because we named the inputs to match their corresponding values in state, it's
//     // super easy to update the state
//     const state = this.state
//     state[e.target.name] = e.target.value;
//     this.setState(state);
// }

// onSubmit = (e) => {
//     e.preventDefault();
//     // get our form data out of state
//     const { fname, lname, email } = this.state;

//     axios.post('/', { fname, lname, email })
//     .then((result) => {
//         //access the results here....
//     });
// }

// render() {
//     const { fname, lname, email } = this.state;
//     return (
//     <form onSubmit={this.onSubmit}>
//         <input type="text" name="fname" value={fname} onChange={this.onChange} />
//         <input type="text" name="lname" value={lname} onChange={this.onChange} />
//         <input type="text" name="email" value={email} onChange={this.onChange} />
//         <button type="submit">Submit</button>
//     </form>
//     );
// }
// }