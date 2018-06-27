import React from "react";
import Friends from "./Friends";
import AddFriendForm from "./AddFriendForm";
import { Route, Link } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("CDM Props", this.props);
    this.setState({ data: this.props.data });
  }

  render() {
    return (
      <div>
        [FRIENDS LIST]
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/friends"}>Friends</Link>
          </li>
        </ul>
        {/* <Friends data={props.data} /> */}
        <Route exact path={"/"} component={LandingPage} />
        <Route
          path={"/friends"}
          render={props => {
            return <Friends data={this.state.data} {...props} />;
          }}
        />
        <Route path={"/friends"} component={AddFriendForm} />
      </div>
    );
  }
}

export default FriendsList;
