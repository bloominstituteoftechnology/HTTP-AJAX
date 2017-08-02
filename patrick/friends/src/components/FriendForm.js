import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import { postFriend } from '../actions';
import { getFriends } from '../actions';
import '../css/FriendForm.css';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Age: '',
      Email: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.addNewFriend = this.addNewFriend.bind(this);
  }


  handleChangeName(event) {
    this.setState({
      Name: event.target.value
    })
  }

  handleChangeAge(event) {
    this.setState({
      Age: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      Email: event.target.value
    })
  }

  addNewFriend() {
  // addNewFriend(event) {
    // event.preventDefault();
    const newFriend = {
      name: this.state.Name,
      age: this.state.Age,
      email: this.state.Email
    };
    const promise = axios.post('http://localhost:5000/new-friend', newFriend);
    // this.props.postFriend(newFriend);
    this.props.getFriends();
  }

  render() {
    return (
      <div className="friendForm">
        <form>
          Name:<input
            placeholder="Your 'friend's' name?"
            value={this.state.Name}
            onChange={this.handleChangeName}
          />
          Age:<input
            placeholder="Their age?"
            value={this.state.Age}
            onChange={this.handleChangeAge}
          />
          Email:<input
            placeholder="Their e-mail?"
            value={this.state.Email}
            onChange={this.handleChangeEmail}
          />
          <button type="submit"
                  onClick={this.addNewFriend}>Submit Your "friend's" Info</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        postFriend: state.postFriend
    };
};

// export default connect(mapStateToProps, { postFriend })(FriendForm);
export default connect(mapStateToProps, { getFriends })(FriendForm);







// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { postFriend } from '../actions';
// import '../css/FriendForm.css';
//
// class FriendForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Name: '',
//       Age: '',
//       Email: '',
//     };
//     this.handleChangeName = this.handleChangeName.bind(this);
//     this.handleChangeAge = this.handleChangeAge.bind(this);
//     this.handleChangeEmail = this.handleChangeEmail.bind(this);
//   }
//
//   handleChangeName(event) {
//     this.setState({
//       Name: event.target.value
//     })
//   }
//
//   handleChangeAge(event) {
//     this.setState({
//       Age: event.target.value
//     })
//   }
//
//   handleChangeEmail(event) {
//     this.setState({
//       Email: event.target.value
//     })
//   }
//
//   render() {
//     return (
//       <div className="friendForm">
//         <form>
//           Name:<input
//             placeholder='Your "friends" name?'
//             value={this.state.Name}
//             onChange={this.handleChangeName}
//           />
//           Age:<input
//             placeholder="Their age?"
//             value={this.state.Age}
//             onChange={this.handleChangeAge}
//           />
//           Email:<input
//             placeholder="Their e-mail?"
//             value={this.state.Email}
//             onChange={this.handleChangeEmail}
//           />
//           <button>Submit Your "friend"s info</button>
//         </form>
//     </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         postFriend: state.postFriend
//     };
// };
//
// export default connect(mapStateToProps, { postFriend })(FriendForm);
