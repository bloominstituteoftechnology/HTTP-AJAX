import React from "react";

class DisplayPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        id: 0,
        name: "",
        age: 0,
        email: ""
      }
    };
  }
  componentWillMount() {
    console.log("component will receive new props");
    if (this.props.selectedId !== undefined && this.props.selectedId !== null) {
      console.log(
        "----------------***----------------->>" + this.props.selectedId.id
      );
      this.setState({
        newFriend: {
          id: this.props.selectedId.id,
          name: this.props.selectedId.name,
          age: this.props.selectedId.age,
          email: this.props.selectedId.email
        }
      });
    }
  }
  handleSubmit = e => {
    console.log("---------what is clicked?" + this.props.match.params.type);
    console.log("------selected Friend " + this.state.newFriend);
    let operation = this.props.match.params.type;
    let history = this.props.history;
    if (operation === "add") {
      console.log("--------------in Add");
      this.props.addItem(e, this.state.newFriend, history);
    } else if (operation === "mod") {
      console.log("*************** in modify");
      this.props.updateItem(e, this.state.newFriend, history);
    } else if (operation === "del") {
      this.props.deleteItem(e, this.state.newFriend.id, history);
    }
    this.setState({
      newFriend: {
        name: "",
        age: 0,
        email: "",
        id: 0
      }
    });
  };

  changeHandler = ev => {
    ev.persist();
    let id = 0;
    if (this.props.match.params.type === "add") {
      id = this.props.length;
    } else {
      id = this.props.selectedId.id;
    }
    this.setState(prevState => ({
      newFriend: {
        ...prevState.newFriend,
        id: id,
        [ev.target.name]: ev.target.value
      }
    }));
  };

  render() {
    console.log("---------in render " + this.state.newFriend.id);
    let warningMsg = "";
    if (this.props.match.params.type === "del") {
      warningMsg = "This friend will be removed on clicking submit.";
    }
    return (
      <div className="friend-display-card">
        <span className="warning-msg">{warningMsg}</span>
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <div className="label-text">Name:</div>
            <div>
              <input
                className="app-input"
                type="text"
                name="name"
                onChange={this.changeHandler}
                placeholder="Full Name"
                value={this.state.newFriend.name || ""}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="label-text"> Age:</div>
            <div>
              <input
                className="app-input"
                type="text"
                name="age"
                onChange={this.changeHandler}
                placeholder="Age"
                value={this.state.newFriend.age || 0}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="label-text">Email:</div>
            <div>
              <input
                className="app-input"
                type="text"
                name="email"
                onChange={this.changeHandler}
                placeholder="Email Address"
                value={this.state.newFriend.email || ""}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="app-button" onClick={this.handleSubmit}>
              Submit
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default DisplayPanel;