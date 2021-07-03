import React from 'react';
import axios from 'axios';
import {
  Route
} from 'react-router-dom';

import Friend from '../component/Friend';
import InfoForm from '../component/InfoForm';
import {
  FriendsWrapper,
  BtnWrapper,
  Btn
} from '../styles/friendStyles';

class Friends extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: [],
        updatedFriend: {},
        isLoading: false
      }
    }

    componentDidMount = () => { // get the list of friends to show.
      this.setState({
        isLoading: true
      });
      axios.get("http://localhost:5000/friends")
        .then(res => {
          this.setState({
            friends: res.data,
            isLoading: false
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            isLoading: false
          });
        })
    }

    addFriend = (friend) => {
      this.setState({
        isLoading: true
      });
      if (!friend.name || !friend.age || !friend.email) return; // be sure the fields have a value
      const info = {
        name: friend.name,
        age: friend.age,
        email: friend.email
      };
      axios.post('http://localhost:5000/friends', info) // Add friend to the list of friends
        .then((res) => {
          this.setState({
            friends: res.data,
            isLoading: false
          })
        })
        .catch(function (error) {
          console.log(error);
          this.setState({
            isLoading: false
          });
        });
    }

    deleteFriend = (id) => {
      const url = `http://localhost:5000/friends/${id}`; //delete selected friend
      axios.delete(url)
        .then(res => {
          this.setState({
            friends: res.data
          })
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    GetUpdatedInfo = (id, friend) => {
      this.setState({
        updatedFriend: friend
      }); // save the information about the friend to be updated
      this.props.history.push(`/update/${id}`); // show the update form
    }

    updateFriend = (friend, id) => {
      this.setState({
        isLoading: true
      });
      const url = `http://localhost:5000/friends/${id}`;
      axios.put(url, friend) //update friend with the information from the form
        .then((res) => {
          this.setState({
            friends: res.data,
            isLoading: false
          })
        })
        .catch(function (error) {
          console.log(error);
          this.setState({
            isLoading: false
          });
        });
    }

    render() {
      return ( 
        <div> 
          {
            this.state.isLoading 
              ? ( <h2 className = "loading" > Hold on, we 're loading your friends!</h2>) 
              : null
          } 
          <FriendsWrapper > {
            this.state.friends.map(friend =>
              <Friend 
                key = {
                  friend.id
                }
                friend = {
                  friend
                }
                update = {
                  this.GetUpdatedInfo
                } // Called when clicking on the pen icon
                delete = {
                  this.deleteFriend
                } // Called when clicking on the - icon 
          />)} 
          </FriendsWrapper> 
          <BtnWrapper> 
            <Btn onClick = {
              () => this.props.history.push("/add")
            } > Add Friend 
            </Btn>
          </BtnWrapper>
          <Route 
            path = "/add"
            render = { (props) => 
              <InfoForm 
                { ...props}
                action = {this.addFriend}
                message = {`Add Friend`}
              />
            }
          /> 
          <Route 
            path = "/update/:id"
            render = {props =>              
              <InfoForm 
                { ...props}
                action = {this.updateFriend}
                message = {`Update Friend`}
                info = {this.state.updatedFriend}
              />
            }
          /> 
        </div>
            );
          }
        }

        export default Friends;