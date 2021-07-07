import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

// const AddFriend = this.props => {

class AddFriend extends Component {
  constructor(props){
    super(props);
    console.log("Add friend props.friend:",this.props.friend);
    console.log("Add friend props.operation:",this.props.match.params.operation);
    this.props.editValue(this.props.friend, this.props.match.params.operation);

  }

  componentDidMount(){
    // this.props.editValue(this.props.friend);
  }

  render() {
    return (
      <div className="pa4 black-80 ba b--dotted br3">
        <form className="measure center">
          <div className="form-group">
            <label className="ma2 db fw6 lh-copy f6" htmlFor="inputName">Name</label>
            <input onChange={(e) => this.props.input(e)} 
              type="text" 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              id="inputName" 
              name="inputName" 
              placeholder="Enter Name"
              value={this.props.name} />
          </div>
          <div className="form-group">
            <label className="ma2 db fw6 lh-copy f6" htmlFor="inputAge">Age</label>
            <input onChange={(e) => this.props.input(e)} 
              type="text" 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              id="inputAge" 
              name="inputAge" 
              placeholder="Enter Age"
              value={this.props.age} />
          </div>
          <div className="form-group">
            <label className="ma2 db fw6 lh-copy f6" htmlFor="inputEmail">E-mail</label>
            <input onChange={(e) => this.props.input(e)}
              type="text" 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              id="inputEmail" 
              name="inputEmail" 
              placeholder="Enter E-mail"
              value={this.props.email} />
          </div>
          <div className="button-group ma3 flex justify-center">
            <Route exact path="/update/add/new" render={() => <button 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mh3" 
              onClick={(e) => this.props.submit(e)} 
              type="submit" 
            >Submit</button>} />
            <Route exact path="/update/edit/:id" render={() => <button 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mh3" 
              onClick={(e) => this.props.edit(e, this.props.match.params.id)} 
              type="submit" 
            >Edit Friend</button>} />
            <Link to="/"><button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Go Back</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFriend;