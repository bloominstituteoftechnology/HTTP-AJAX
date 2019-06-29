import React from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import Header from "./components/Header";
import DisplayPanel from "./components/DisplayPanel";
import Operations from "./components/Operations";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      length: 0
    };
  }
  componentWillMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          length: res.data.length
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log("below Fetch");
  }

  fetchFriend = id => {
    console.log("========fetch friend id in app.js ==========" + id);
    // axios
    //   .get(`http://localhost:5000/friends`)
    //   .then(response => {
    //     return response.data.find(friend => `${friend.id}` === id);
    //   })
    //   .then(friend =>
    //     this.setState(() => ({
    //       selectedFriend: friend
    //     }))
    //   )
    //   .catch(error => console.error(error));

    this.setState({
      selectedFriend: this.state.friends.find(friend => friend.id === id)
    });
    console.log(this.state.friends.find(friend => friend.id === id));
  };

  addItem = (e, item, history) => {
    e.preventDefault();
    console.log("in add item" + item);
    if (item !== undefined && item !== null) {
      console.log(item.id, item.name, item.age, item.email);
    }
    axios
      .post("http://localhost:5000/friends", item)
      .then(res => {
        this.setState({
          friends: res.data,
          length: res.data.length
        });
        // HTTP STEP V - Clear data form in ItemForm and route to /item-list
       history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteItem = (e, id, history) => {
    e.preventDefault();
    console.log("now in deleteItem in App");
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log("Data is back, now set state and reroute", res.data);
        this.setState({
          friends: res.data,
          length: res.data.length
        });
        history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateItem = (e, item, history) => {
    console.log("hhhhhhhhhhhh" + history);
    //const { match, location, history } = this.props;
    e.preventDefault();
    console.log("In update item now");
    if (item !== undefined && item !== null) {
      console.log(item.id, item.name, item.age, item.email);
    }
    let id = item.id;
    axios
    .put(`http://localhost:5000/friends/${id}`, item)
      .then(res => {
        this.setState({
          friends: res.data,
          length: res.data.length
        });
      })
      .catch(error => console.log(error));
  };

  // componentDidUpdate() {
  //   console.log("--------In CDU ---------------");
  //   console.log(this.state.friends);
  //   console.log(this.state.selectedFriend);
  //   console.log(this.state.length);
  // }


  render() {
    console.log("-------value of length + 1 is " + (this.state.length + 1));
    return (
      <div className="App">
                <Header />
        <Route
          path="/"
          render={props => (
            <FriendsList
            {...props}
            friends={this.state.friends}
            fetchFriend={this.fetchFriend}
          />
          )}
        />
        <Operations />
        {/* <Route exact path="/friends/:id" component={Friend} /> */}
        <Route
          exact
          path="/friends/:id"
          render={props => <Friend {...props} />}
        />
        <Route
          exact
          path="/displayPanel/:type"
          render={props => (
            <DisplayPanel
              {...props}
              selectedId={this.state.selectedFriend}
              length={this.state.length + 1}
              addItem={this.addItem}
              updateItem={this.updateItem}
              deleteItem={this.deleteItem}
            />
          )}
        />>
      </div>
    );
  }
}

export default App;
