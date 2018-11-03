import React from 'react';
import axios from 'axios';
    
class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friend: [],
            active: false,
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

    toggleClass() {
      const currentState = this.state.active;
      this.setState({active: !currentState});
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
                <input type="text"/>
                <p>Edit Age</p>
                <input type="text"/>
                <p>Edit Email</p>
                <input type="text"/>
                <div className="button-container">
                <button>Update</button>
              </div>
              </form>
          </div>
        );
    }
}

export default FriendCard;
