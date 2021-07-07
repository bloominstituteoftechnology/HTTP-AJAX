import React from 'react';
import axios from 'axios';
    
class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friend: [],
            name: '',
            age: 0,
            email: '',
        }
    }
    

    componentDidMount(){
      axios
        .get(`http://localhost:5000/friends/${this.props.match.params.id}`)
        .then(response => {
            console.log("friendIdFetch:", response);
            this.setState({friend: [response.data]})
        })
        .catch(error => console.log(error))
    }

    inputHandler = e => {
      const name = e.target.name;
      if(name === "age") {
        this.setState({age: Number(e.target.value)})
      } else {
        this.setState({[name]: e.target.value})
      }
    }


    render() { 
        return ( 
          <div>
            {this.state.friend.map(info => (
              <div key={info.id}>
                <h1>{info.name}</h1>
                <p>Friend Id: {info.id}</p>
                <p>Friend Age: {info.age}</p>
                <p>Friend Email: {info.email}</p>
              </div>
            ))}
              <form>
                <h2>Update friend Info.</h2>
                <p>Edit Name</p>
                <input type="text" name="name" onChange={this.inputHandler} value={this.state.name} />
                <p>Edit Age</p>
                <input type="text" name="age" onChange={this.ageInputHandler} value={this.state.Age}/>
                <p>Edit Email</p>
                <input type="text" name="email" onChange={this.inputHandler} value={this.state.email}/>
                <div className="button-container">
                <button>Update</button>
              </div>
              </form>
          </div>
        );
    }
}

export default FriendCard;
