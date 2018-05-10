import React from "react";

class UpdateProfile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
       <div>
          <form onSubmit={(e) => this.props.update(e)} name={this.props.id}>
              <label>Name</label>
              <br/>
              <input type="text" required value={this.props.name} name="updateName" onChange={this.props.input} />
              <br/>
              <label>Age</label>
              <br/>
              <input type="number" required value={this.props.age} name="updateAge" onChange={this.props.input} />
              <br/>
              <label>Email</label>
              <br/>
              <input type="email" required value={this.props.email} name="updateEmail" onChange={this.props.input} />
              <br />
              <button type="submit"> update </button>
            </form>
          </div>

    );
  }
}

export default UpdateProfile;