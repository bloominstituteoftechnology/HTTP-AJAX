import React from "react";

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
      render(){
        return(
          <div>
            <form className="add-friend">
              <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input type="text" className="form-control" id="InputName" placeholder="Name"></input>
              </div>
              <div className="form-group">
                <label htmlFor="InputAge">Age</label>
                <input type="text" className="form-control" id="InputAge" placeholder="Age"></input>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Email</label>
                <input type="email" className="form-control" id="InputEmail" placeholder="Email"></input>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        )
      }
    }

export default AddFriend;
