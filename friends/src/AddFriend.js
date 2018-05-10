import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

const AddFriend = props => {
  const operation = props.match.params.operation;
  return (
    <div>
      <Form>
        <FormGroup className="form-group">
          <Label htmlFor="inputName">Name</Label>
          <Input onChange={(e) => props.input(e)} type="text" className="form-control" id="inputName" name="inputName" placeholder="Enter Name"
          value={props.name} />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="inputAge">Age</Label>
          <Input onChange={(e) => props.input(e)} 
            type="text" 
            className="form-control" 
            id="inputAge" 
            name="inputAge" 
            placeholder="Enter Age"
            value={props.age} />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="inputEmail">E-mail</Label>
          <Input onChange={(e) => props.input(e)}
            type="text" className="form-control" id="inputEmail" name="inputEmail" placeholder="Enter E-mail"
            value={props.email} />
        </FormGroup>
        <div className="button-group d-flex justify-content-center">
          <Route exact path="/update/add/new" render={() => <Button className="mx-3" onClick={(e) => props.submit(e)} type="submit" className="btn btn-primary">Submit</Button>} />
          <Route exact path="/update/edit/:id" render={() => <Button 
            className="btn btn-primary mx-3" 
            onClick={(e) => props.edit(e, props.match.params.id)} 
            type="submit" 
            >Edit Friend</Button>} />
          {/* <Button className="mx-3" onClick={(e) => props.submit(e)} type="submit" className="btn btn-primary">Submit</Button> */}
          <Link to="/"><Button className="mx-3">Go Back</Button></Link>
        </div>
      </Form>
    </div>
  )
}

export default AddFriend;