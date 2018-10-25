import React from 'react';
import { Link } from 'react-router-dom';


export default class FriendCard extends React.Component {
    constructor() {
        super();
        this.state = {
            // newInfo: {
            //     name: this.props.friend.name,
            //     age: this.props.friend.age,
            //     email: this.props.friend.email,
            //     id: this.props.friend.id
            // },
        }
    }

    componentWillMount() {
    //     const current = this.props.friends.map(friend => {
    //         // this.props.match.params.id === `${friend.id}`, 
    //         // [0]
    //         console.log(friend)
    //     });
    //     this.setState({userInfo: current})
    //     console.log(current)
    const friends = this.props.friends;
        console.log(friends)
    }
    

    inputChange = e => {
    e.preventDefault();
    this.setState({
      newInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  numberInputChange = e => {
    e.preventDefault();
    this.setState({
      newInfo: {
        ...this.state.userInfo,
        [e.target.name]: parseInt(e.target.value)
      }
    });
    console.log(this.state.userInfo)
  };

  

  submitUpdate = (e) => {
      e.preventDefault();
      this.props.updateFriend(this.state.userInfo)
  }

  

    render() {
        return (
            <div>
            
                <Link to='/friends'>Home</Link>
                <h1>
                {/* {this.state.userInfo.name} */}
                name
                </h1>
                <div>
                {/* {`Age: ${this.state.userInfo.age}`} */}
                age
                </div>
                <div>
                {/* {`Email: ${this.state.userInfo.email}`} */}
                email
                </div>
                {/* <form onSubmit={this.submitUpdate}> */}
                {/* <input placeholder='Name' onChange={this.inputChange} value={this.state.userInfo.name} name='name' /> */}
                {/* <input type='number' placeholder='Age' onChange={this.numberInputChange} value={this.state.userInfo.age} name='age' /> */}
                {/* <input placeholder='Email' onChange={this.inputChange} value={this.state.userInfo.email} name='email' /> */}
                {/* <button type='submit'>Update Friend</button> */}
                {/* </form> */}
            </div>
        )
    }
}
