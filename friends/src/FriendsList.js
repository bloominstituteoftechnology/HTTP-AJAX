import axios from "axios";
import React, { Component } from "react";

class FriendsList extends Component {
  constructor() {
    super ();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }


componentDidMount() {  
  axios
    .get(`http://localhost:5000/friends/`)
    .then(response => {
      this.setState({ friends: response.data });
    })

    .catch(err => {
      console.log(err);
     });

}


render() {
  return(
    <div>
    </div>
    
  );
}

}
export default FriendsList;




