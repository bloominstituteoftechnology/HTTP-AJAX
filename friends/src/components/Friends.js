import React, { Component } from "react";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>Friends List</h1>
      </div>
    );
  }
}

export default Friends;
