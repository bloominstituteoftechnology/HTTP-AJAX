import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import axios from "axios";

// const Friend = props => {

//     return (

//         <div className="friends-list">
//             {props.friends.map(
//                 friend => (
//                     <div className="friend-card" key={friend.id}>
//                         <h4>{friend.name}</h4>
//                         <p>{friend.age}</p>
//                         <p>{friend.email}</p>
//                     </div>
//                 )
//             )}
//         </div>
//     )

// }

class Friend extends React.Component {
  state = {
    friend: ""
  };


  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        
        this.setState({
          friend: res.data.find(friend => friend.id === this.props.match.params.id)
        });
      })
      .catch(err => console.log(err));
      console.log("Friend Axios Then", this.state);
  }

  render() {
    const props = this.props;
    console.log("Friend Props", this.state.friend);
    const friend = this.state.friend;
    if (!friend) return <h2>Loading...</h2>;

    return (
      <div className="friend-wrapper">
        <h2>{friend.name}</h2>
        <h4>{friend.age}</h4>

        <button
          onClick={() => {
            this.props.removeFriend(this.props.match.params.id);
            this.props.history.push("/");
          }}
          className="md-button"
        >
          Delete Item
        </button>
      </div>
    );
  }
}

export default Friend;
