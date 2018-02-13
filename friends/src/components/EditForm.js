import React from 'react';
import axios from 'axios';

class EditForm extends React.Component {
    state = {
        name: this.props.name,
        age: this.props.age,
        email: this.props.email,
    };

    onChange = event => {
        let { name, value } = event.target;
        if (event.target.type === 'number') {
            value = Number(value);
        }
        this.setState({ [name]: value });
    };

    onSubmit = event => {
      event.preventDefault();
      const { name, age, email } = this.state;

      axios
          .put(`http://localhost:5000/friends/${this.props.id}`, {
              name,
              age,
              email,
          })
          .then(result => {
              console.log('success', result);
              this.props.getFriends();
          })
          .catch(error => {
              console.error(error);
          });
      this.setState({ name: '', age: '', email: '' });
  };

    render() {
      const formToggle = this.props.editing ? { display: 'block' } : { display: 'none' } ;
        return (
            <div style={formToggle} className="edit-friend-form">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.state.name}
                        autoComplete="name"
                        required
                    />
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        name="age"
                        onChange={this.onChange}
                        value={this.state.age}
                        max="120"
                    />
                    <label htmlFor="age">Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        autoComplete="email"
                    />
                    <button onClick={this.props.toggleEdit} className="edit-button" type="submit">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default EditForm;