import React, { Component } from "react";
// import axios from "axios";
import styled from "styled-components";
// import AddFriendsForm from "./AddFriendsForm";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.2rem;
  text-align: center;
`;

const FriendCard = styled.div`
  border: 1px dashed white;
  margin-bottom: 2rem;
  min-width: 25%;
  width: 265px;
  padding: 1rem;
  background: none;
  position: relative;
`;

const FriendsBox = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Span = styled.span`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.2rem;
  color: red;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1.1);
    top: 14px;
    cursor: pointer;
  }
`;

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/friends/")
  //     .then(res => {
  //       this.setState({
  //         friendsData: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // addFriend = e => {
  //   e.preventDefault();
  //   if (
  //     this.state.name !== "" &&
  //     this.state.age !== "" &&
  //     this.state.email !== ""
  //   ) {
  //     axios
  //       .post("http://localhost:5000/friends/", {
  //         id: Date.now(),
  //         name: this.state.name,
  //         age: this.state.age,
  //         email: this.state.email
  //       })
  //       .then(function(response) {
  //         console.log(response);
  //       })
  //       .catch(function(err) {
  //         console.log(err);
  //       });
  //     this.setState(prevState => ({
  //       friendsData: [
  //         ...prevState.friendsData,
  //         {
  //           name: this.state.name,
  //           age: this.state.age,
  //           email: this.state.email
  //         }
  //       ],
  //       name: "",
  //       age: "",
  //       email: ""
  //     }));
  //   } else return;
  // };

  // deleteItem = id => {
  //   axios
  //     .delete(`http://localhost:5000/friends/${id}`)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         friendsData: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container>
        {/* <AddFriendsForm
          friendsData={this.state.friendsData}
          addFriend={this.addFriend}
          handleChange={this.handleChange}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        /> */}
        <h2>Your Friends:</h2>
        <Link to="/addfriend">
          <button>Add A Friend</button>
        </Link>
        <FriendsBox>
          {this.props.friendsData.map(friend => (
            <FriendCard key={friend.id ? friend.id : Date.now()}>
              <h2>
                {friend.name}
                <Span
                  onClick={() => {
                    this.props.deleteFriend(friend.id);
                    this.props.history.push("/friendslist");
                  }}
                >
                  X
                </Span>
              </h2>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
              <Link to="/friend-edit/:id">
                <button>Update Friend</button>
              </Link>
            </FriendCard>
          ))}
        </FriendsBox>
      </Container>
    );
  }
}
