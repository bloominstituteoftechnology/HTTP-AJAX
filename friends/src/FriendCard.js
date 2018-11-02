import React from 'react';
import axios from 'axios';
    
class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friend: [],
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
            <div className="button-container">
                <button>Update</button>
                <button>Delete</button>
              </div>
          </div>
        );
    }
}

export default FriendCard;
