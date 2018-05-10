import React, {Component} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Friend from "./Friend";
import "./Friends.css";

class Friends extends Component {
  state = {
    friends: [],
    name: "",
    age: "",
    email: ""
  };

  updateAll = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.updateAll();
  }

  handleTextInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.age]: event.target.value,
      [event.target.email]: event.target.value
    });
  };

  saveFriendsData = (e) => {
    e.preventDefault();
    const friendData = { name: this.state.name, age: this.state.age, email: this.state.email }
    axios.post("http://localhost:5000/friends", friendData)
        .then(savedFriend => {
            this.updateAll();
        })
        .catch(err => {
            console.log(err)
        });
        this.setState({ name: '', age: '', email: ''})
    }


  render() {
    return <div>
        <div class="container">
        <h5 class="section-title h1 mt-sm-4">FRIENDS</h5>
        <div class="row">
            {/* <section id="team" class="pb-5"> */}
            {this.state.friends.map(friend => {
            return <div class="col-sm-4 friend-card mt-sm-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div class="mainflip">
                    <div class="frontside">
                      <div class="card">
                        <div class="card-body text-center">
                          <p>
                            <img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png" alt="card image" />
                          </p>
                          <h4 class="card-title">{friend.name}</h4>
                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center">
                         <p class="card-title">
                            Name: {friend.name}
                          </p>
                          <p class="card-title">
                            Age: {friend.age}
                          </p>
                          <p class="card-title">
                            Email: {friend.email}
                          </p>
                          <Link onClick={() => {
                              this.props.updateFriend(friend);
                            }} to={`/friends/${friend.id}`}>
                            <p class="card-text">
                              Visit {friend.name}'s card
                            </p>
                          </Link>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a class="social-icon text-xs-center" target="_blank" href="#">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a class="social-icon text-xs-center" target="_blank" href="#">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a class="social-icon text-xs-center" target="_blank" href="#">
                                <i class="fa fa-skype"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a class="social-icon text-xs-center" target="_blank" href="#">
                                <i class="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>;
            })}
            {/* </section> */}
        </div>
    </div>

        <form class='mt-sm-4'>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleTextInput} />
          <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.handleTextInput} />
          <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleTextInput} />
          <button onClick={this.saveFriendsData}>Save Friend</button>
        </form>
        {/*   */}
      </div>;
  }
}

function FriendsDeatils({friend}) {
    const {name, age, email} = friend;
    return (
        <div>
            {name}
        </div>
    )
}
export default Friends;



{/* <Link
  onClick={() => {
    this.props.updateFriend(friend);
  }}
  to={`/friends/${friend.id}`}
>
   {friend.name}

</Link>; */}