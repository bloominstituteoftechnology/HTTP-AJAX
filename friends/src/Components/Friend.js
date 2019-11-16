import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:props.friend.name,
            age:props.friend.age,
            email:props.friend.email,
            id:props.friend.id
         }
    }

    // componentDidMount() {
    //     // change this line to grab the id passed on the URL
    //     const id = this.props.match.params.id;
    //     this.fetchFriend(id);
    //   }


    handleDelete = id => {
        axios.delete(`http://localhost:5000/Friends/${id}`)
          .then(response => {
            this.props.handleSetData(response.data);
            this.setState({ friendsData: response.data });
          })
          .catch(err => {
            console.log(err);
          })
      }

    fetchFriend = id => {
    axios
        .get(`http://localhost:5000/friends/${id}`)
        .then(response => {
        this.setState(() => ({ friend: response.data }));
        })
        .catch(error => {
        console.error(error);
        });
    };

    render() { 
        const {name, age, email} = this.props.friend;
        const handleDelete = id => {
            this.handleDelete(id);
        }
        return (
            <div>
                <h2>Name:{name}</h2>
                <p>Age: {age}</p>
                <p>Email:{email}</p>
                
                
                <button onClick={() => this.handleDelete(`${this.state.id}`)}>Delete</button>
                
            </div>
        )           
      
    }    
}
 
export default Friend;

