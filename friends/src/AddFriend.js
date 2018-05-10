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
          <Input onChange={(e) => props.input(e)} type="text" className="form-control" id="inputName" name="inputName" placeholder="Enter Name" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="inputAge">Age</Label>
          <Input onChange={(e) => props.input(e)} type="text" className="form-control" id="inputAge" name="inputAge" placeholder="Enter Age" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="inputEmail">E-mail</Label>
          <Input onChange={(e) => props.input(e)} type="text" className="form-control" id="inputEmail" name="inputEmail" placeholder="Enter E-mail" />
        </FormGroup>
        <div className="button-group d-flex justify-content-center">
          <Route exact path="/update/add" render={() => <Button className="mx-3" onClick={(e) => props.submit(e)} type="submit" className="btn btn-primary">Submit</Button>} />
          {/* <Button className="mx-3" onClick={(e) => props.submit(e)} type="submit" className="btn btn-primary">Submit</Button> */}
          <Link to="/"><Button className="mx-3">Go Back</Button></Link>
        </div>
      </Form>
    </div>
  )
}

export default AddFriend;