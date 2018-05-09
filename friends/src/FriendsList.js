import axios from "axios";

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
}

  componentDidMount() {  
  axios
    .get(`http://localhost:5000/friends/`)
    .then(response => {
      console.log(response.data);
    }

    .catch(err => {
      console.log(err);
     });

 }


export default FriendsList;
