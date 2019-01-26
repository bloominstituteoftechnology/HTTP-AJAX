import React from 'react';
import { MainFormDiv, FormTitle, FormInput, FormButton } from './PostForm';

class EditForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      friendData: {
        name: '',
        email: '',
        age: ''
      }
    }
  }

  handleChange = e => {
    this.setState({
      friendData: {
        ...this.state.friendData,
        [e.target.name]: e.target.value
      }
    });
  }

  updateFromForm = e => {
    let id = this.props.match.params.id;
    id = Number(id);
    e.preventDefault();
    if (!this.state.friendData.name || !this.state.friendData.email || !this.state.friendData.age) return alert('Please fill out all fields');
    this.props.updateFriend(id , this.state.friendData)
  }

  render(){
    const id = this.props.match.params.id;
    const friend = this.props.friends.find(friend => {return `${friend.id}` === id})

    return(
      <div>
        { friend && (
          <MainFormDiv>
            <FormTitle>EDIT Current Friend</FormTitle>
            <form onSubmit = {this.updateFromForm}>
              <FormInput
                type="text"
                name="name"
                placeholder={friend.name}
                onChange={this.handleChange}
                value={this.state.name}
              />
              <FormInput
                type="text"
                name="email"
                placeholder={friend.email}
                onChange={this.handleChange}
                value={this.state.email}
              />
              <FormInput
                type="text"
                name="age"
                placeholder={friend.age}
                onChange={this.handleChange}
                value={this.state.age}
              />
              <FormButton className="quotes-btn" type="submit">
                EDIT friend
              </FormButton>
            </form>
          </MainFormDiv>
        )}

      </div>

    )
  }
}

export default EditForm;
