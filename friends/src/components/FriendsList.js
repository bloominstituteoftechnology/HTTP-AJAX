import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend } from '../actions';
import '../index.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function CustomTextInput(props) {
  return (
    <input
      ref={props.inputRef}
      className={props.className}
      size={props.size}
      placeholder={props.placeholder}
      type={props.type}
      style={props.style}
    />
  );
}
class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.name = '';
    this.age = 0;
    this.email = '';
  }
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      },
      {
        Header: 'Age',
        accessor: 'age'
      },
      {
        Header: 'Email',
        accessor: 'email',
        Cell: props => <span className="email">{props.value}</span>
      }
    ];

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            /*
            console.log(
              `name:${this.name.value}  age:${this.age.value} email:${this.email
                .value}`
            );
            */
            this.props.addFriend({
              name: this.name.value,
              age: this.age.value,
              email: this.email.value,    
            });
            this.name = '';
            this.age = 0;
            this.email = '';
          }}
        >
          <div style={{ height: '30px', display: 'inline' }}>
            <CustomTextInput
              name="name"
              inputRef={el => (this.name = el)}
              className="inputText"
              type="text"
              placeholder="name"
              size="30"
            />
            <CustomTextInput
              inputRef={el => (this.age = el)}
              className="inputText"
              type="number"
              placeholder="age"
              size="5"
            />
            <CustomTextInput
              inputRef={el => (this.email = el)}
              className="inputText"
              type="email"
              placeholder="email"
              size="30"
            />               
          </div>
          <button type="submit">Submit</button>
        </form>
        <ReactTable data={this.props.friends} columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends, addFriend })(FriendsList);
