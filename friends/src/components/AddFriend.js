import React from "react";
import axios from "axios";

class AddFriend extends React.Component {
  constructor(props){
    super(props);
        super(props);
        this.state = {
            name: "",
            age: "",
            email: ""
        }
      }
      copyinfo = (event) => {this.setState({[event.target.name]: event.target.value})}
      postinfo = (event) => {
        const {name, age, email} = this.state;
        axios.post('http://localhost:5000/friends', {name, age, email})
          .then(response => console.log(response))
          .catch(error => console.log(`${error}`))}
      render(){
        return(
          <div>
            <form className="add-friend">
              <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input type="text" className="form-control" id="InputName" placeholder="Name" name="name" onChange={this.copyinfo}></input>
              </div>
              <div className="form-group">
                <label htmlFor="InputAge">Age</label>
                <input type="text" className="form-control" id="InputAge" placeholder="Age" name="age" onChange={this.copyinfo}></input>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Email</label>
                <input type="email" className="form-control" id="InputEmail" placeholder="Email" name="email" onChange={this.copyinfo}></input>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.postinfo}>Submit</button>
            </form>

          </div>
        )
      }
    }

export default AddFriend;
