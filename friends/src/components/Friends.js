import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            url: props.url,
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
      axios.get(this.state.url).then(response => {
        this.setState({ friends: response.data });
      });
    }

    inputHandler = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    submitHandler = () => {
      let name = this.state.name;
      let age = this.state.age;
      let email = this.state.email;
      let newFriend = {name: name, age: age, email: email};
      axios
        .post(this.state.url, newFriend)
        .then(response => {
          this.setState({
            name:'',
            age: '',
            email: ''
          });
          this.getFriends();
        })
        .catch(err => {
          console.log(err);
        });
      }

    render () {
        console.log(this.state.url);
        return (
            <div className='friends'>
                <h1>My Friends</h1>
                {this.state.friends.map(friend => {
                    return(
                        <div key={friend.id} className='friend'>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
                <div className='add-friend'>
                  <h2>Add A Friend</h2>
                  <form onKeyPress={key => {
                      if(key.charCode === 13) this.submitHandler();
                    }}>
                    <input name='name' placeholder=' Enter Name' onChange={this.inputHandler} value={this.state.name} type='text' />
                    <input name='age' placeholder=' Enter Age' onChange={this.inputHandler} value={this.state.age} />
                    <input name='email' placeholder=' Enter Email' onChange={this.inputHandler} value={this.state.email} type='email' />
                  </form>
                  <button onClick={this.submitHandler} className='submit'>Submit</button>
                </div>
            </div>
        )
    }
}

export default Friends;
