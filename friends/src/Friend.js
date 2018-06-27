import React from "react";
import axios from "axios";

class Avenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
      editedAvenger: ""
    };
  }
  toggleForm = () => {
    this.setState({ showEditForm: !this.state.showEditForm });
  };
  editAvengerHandler = e => {
    this.setState({ editedAvenger: e.target.value });
  };
  saveEditAvenger = () => {
    const newAvenger = { newAvenger: this.state.editedAvenger }; // create our edits object
    axios
      .put(
        `http://localhost:5555/api/avengers/${this.props.avenger.id}`,
        newAvenger
      )
      .then(response => {
        console.log(response);
        this.props.handleSetData(response.data);
      })
      .catch(error => console.log(error)); // send up our edits to the server using a put
  };
  render() {
    return (
      <div>
        {this.props.avenger.name}
        {this.state.showEditForm ? (
          <EditAvenger
            submitEdits={this.saveEditAvenger}
            avenger={this.props.avenger}
            editHandler={this.editAvengerHandler}
          />
        ) : null}
        <button onClick={this.toggleForm}>Show edit form</button>
      </div>
    );
  }
}

export default Avenger;
