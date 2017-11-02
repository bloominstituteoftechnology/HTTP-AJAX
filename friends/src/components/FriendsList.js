import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend, deleteFriend } from '../actions';
import '../index.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function CustomTextInput(props) {
  return (
    <input
      ref={props.inputRef}
      name={props.name}
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
    this.pet1 = {species:'', name:''};
    this.pet2 = {species:'', name:''};
    this.pets = [this.pet1,this.pet2];
    this.defaultPets = this.pets.slice(0)
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
      },
      {
        id: 'pet1',
        Header: 'Pet 1',
        accessor: d => d.pets[0],
        Cell: props => (
          <span>
            <span className='pet_species'>Species: {props.value.species}</span><span className='pet_name'>Name: {props.value.name}</span>
            </span>
        )
      },
      {
        id: 'pet2',
        Header: 'Pet 2',
        accessor: d => d.pets[1],
        Cell: props => (
          <span>
            <span className='pet_species'>Species: {props.value.species}</span><span className='pet_name'>Name: {props.value.name}</span>
          </span>
        )
      },
      {
        id: 'delete',
        Header: 'Delete',
        accessor: 'name', 
        Cell: props => (
            <button onClick={() => {
              this.props.deleteFriend(props.value)
            }}>Delete</button>
        )
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
              pets: [
              {species: this.pet1.species.value, name: this.pet1.name.value},
              {species: this.pet2.species.value, name: this.pet2.name.value}
              ]
     
            });
            this.name = '';
            this.age = 0;
            this.email = '';
            this.pets = this.defaultPets.slice(0)
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
            <div />
            <CustomTextInput
              inputRef={el => (this.pet1.species = el)}
              className="inputText"
              type="text"
              placeholder="Pet 1 Species"
              size="20"
            />
            <CustomTextInput
              inputRef={el => (this.pet1.name = el)}
              className="inputText"
              type="text"
              placeholder="Pet 1 Name"
              size="20"
            />         
            <CustomTextInput
              inputRef={el => (this.pet2.species = el)}
              className="inputText"
              type="text"
              placeholder="Pet 2 Species"
              size="20"
            />
            <CustomTextInput
              inputRef={el => (this.pet2.name = el)}
              className="inputText"
              type="text"
              placeholder="Pet 2 Name"
              size="20"
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

export default connect(mapStateToProps, { getFriends, addFriend, deleteFriend })(FriendsList);