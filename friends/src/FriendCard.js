import React , {Component} from 'react';
import axios from 'axios';

export default class FriendCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: null
        };
    }
    componentDidMount= () =>{
        const id= this.props.match.params.id;
        this.fetchFriend(id)
        console.log(id);
    }


/* <h2>Name: {props.name}</h2>
<h3>Age: {props.age}</h3>
<h3>Email: {props.email}</h3> */
  
    
    fetchFriend = id => {
        axios
          .get(`http://localhost:5000/friends${id}`)
          .then(response => {
            this.setState(() => ({ friends: response.data }));
          })
          .catch(error => {
            console.error(error);
          });
      };
}
