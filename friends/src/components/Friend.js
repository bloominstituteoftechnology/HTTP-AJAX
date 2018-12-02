import React from 'react';
import axios from 'axios';
// import Friend from './Friend';

let url = 'http://localhost:5000/friends';


class Friend extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  updateTheFriendsList = response => {
    this.setState({
      allFriendsList: response,
    })
  }

  update = (id, data) => {
    axios
      .put(`${this.state.url}/${this.props.allFriendsList.id}`, {data})
      .then(response => this.setState({ stateFriendsData: response.data }))
      .catch(err => console.log(err));

  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  aaa = () => {
    return{
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,

    }
    

  };

  clearState = () => {
    this.setState({ name: '', age: '', email: ''})
  }

  printIt = (event) => {
    // event.preventDefault();
    // console.log(this.props.onUpdate(this.props.match.params.id, this.state));
    this.props.onUpdate(this.wOW());
    this.cleanState();
    
    // this.props.history.push("/Friend");
  };

  render() {
    console.log(`${this.props.allFriendsList.id}, ${this.props.match.params.id}`);
    console.log(this.props.allFriendsList);
    console.log (this.state);

    return (
      <div className="friendsListWrapper" >

        {this.props.allFriendsList.map(amigo => {
          return (
            <div key={amigo.id} className="friendCard">

              <h5>Friend number : {` ${amigo.id} `} </h5>
              <h1>Name : {` ${amigo.name} !`}</h1>
              <p>Age : {amigo.age}</p>
              <a><p>Email : {amigo.email}</p></a>
              <p>Id # : {amigo.id}</p>
              <button type="" onClick={() => {
                this.props.onDelete(
                  amigo.id);
              }} >Delete</button>

              <form onSubmit={this.printIt}>
                <h2>Update Friend</h2>

                <input value={this.state.name}
                  name='name'
                  placeholder='Enter A Name'
                  type='text'
                  onChange={this.onChangeHandler} />

                <input value={this.state.age}
                  name='age'
                  placeholder='Enter An Age'
                  type='text'
                  onChange={this.onChangeHandler} />

                <input value={this.state.email}
                  name='email'
                  placeholder='Enter An Email'
                  type='email'
                  onChange={this.onChangeHandler} />

                {/*<button type="" onClick={() => {
                this.props.OnUpdate(amigo.id);}} >Update2</button>*/}

                <div type=""
                  onClick={() => {
                    this.props.onUpdate(amigo.id, this.aaa());
                    this.clearState();
                  }}>Update Friend Now</div>
                
              </form>
            </div>

          )
        })}
      </div>
    );


  }

}

export default Friend;