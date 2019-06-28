import React from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import './PersonForm.css';

class FriendForm extends React.Component{
    render(){
        return(
            <div className="newPerson">
                <h1>Add New Friend</h1>
                <Form>
                    <FormGroup>
                        <Label classname="formLabel" for="exampleName">Name</Label>
                        <Input type="name"name="name"id="exampleName"placeholder="Add Someone"/>

                    </FormGroup>
                    <FormGroup>
                        <Label className="formLabel"for="exampleSelect">Age</Label>
                        <Input type='select'name='select'id='exampleSelect'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Button className="submit"size='lg'>
                    Add Friend
                </Button>
            </div>
        )
    }
}
export default FriendForm;