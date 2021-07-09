import React from 'react';
import styled from 'styled-components'

const AddForm = styled.div`
    width: 60%;
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
`

class Add extends React.Component {


  render() {
    return (
      <AddForm>
        <form onSubmit={this.handleSubmit} id="addForm">
          <label>
            ID:
            <input type="text" name="id" onChange={this.props.change} />
          </label>
          <label>
            Name:
            <input type="text" name="name" onChange={this.props.change} />
          </label>
          <label>
            Age:
            <input type="text" name="age" onChange={this.props.change} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.props.change} />
          </label>
          <button type="submit" onClick={this.props.submit}>Add</button>
          <button type="submit" onClick={this.props.update}>Update</button>
        </form>
      </AddForm>
    )
  }
}

export default Add;