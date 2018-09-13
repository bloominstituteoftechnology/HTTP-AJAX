import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class FrdFrm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frdnme: '',
            frdage: Number,
            frdeml: ''
        }
    }

    handleBtnSbmt = event => {
        axios
            .post("http://localhost:5000/friends", {
              name: this.state.frdnme,
              age: this.state.frdage,
              email: this.state.frdeml
            })
            .then((response) => {
              this.setState({
                frdnme: '',
                frdage: Number,
                frdeml: ''
              });
            })
            .then((response) => {
              this.props.history.push("/");
            })
            .catch(err => {
              console.log(err);
            })
      };

      handleIptChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        });
      }

    render() {
        return (
            <div>
              <Form>
                  <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input type="text" name="frdnme" placeholder="Enter name" value={this.state.frdnme} onChange={this.handleIptChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="age">Age: </Label>
                    <Input type="number" name="frdage" placeholder="Enter age" value={this.state.frdage} onChange={this.handleIptChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email: </Label>
                    <Input type="email" name="frdeml" placeholder="Enter email" value={this.state.frdeml} onChange={this.handleIptChange} />
                  </FormGroup>
                </Form>
                <Button onClick={this.handleBtnSbmt}>Add</Button>
            </div>
          );
    }
}

export default FrdFrm;
