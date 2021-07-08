import React from 'react';
// import ContentEditable from './ContentEditable';

class Friend extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    const { id, name, email, age } = this.props;
    this.setState({
      id: id,
      name: name,
      email: email,
      age: String(parseInt(age, 10))
    })
  }
  handleOnChange = (event) => {
    event.preventDefault();
    const element = event.target.className;
    console.log(element, event.target.childNodes[0].nodeValue)
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    const { id, deleteFriend } = this.props;
    deleteFriend(event, id)
  }

  handleDoubleClick = (event) => {
    event.preventDefault();
    console.log(event.target.contentEditable, 'has been doubleClicked')
    const element = event.target;
    element.contentEditable = true;
    setTimeout(function() {
      if (document.activeElement !== element) {
        element.contentEditable = false;
      }
    }, 300);
  }

  handleBlur = (event) => {
    event.preventDefault();
    const { modifyFriendsList } = this.props
    const element = event.target;
    element.contentEditable = false;
    const valueField = element.className;
    const newValue = element.childNodes[0].nodeValue 
    const updateObj = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    }
    updateObj[valueField] = newValue;
    modifyFriendsList(updateObj);


    this.setState({
      [valueField]: newValue
    })
    console.log('has blured', newValue, valueField);
  }

  render() { 
    const { name, email, age } = this.props;
    const txtHandlers = {
      onDoubleClick: this.handleDoubleClick,
      onBlur: this.handleBlur,
      onChange: this.handleOnChange
    }
    return (
      <div className="friend" style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
      <div className="name" {...txtHandlers}>{name}</div>
      <div className="email" {...txtHandlers}>{email}</div>
      <div className="age" {...txtHandlers}>{age}</div>
      <button onClick={this.handleButtonClick}>X</button>
      </div>
      );
    }
  }
  // <ContentEditable onChange={this.handleOnChange}>{name}</ContentEditable>
  
export default Friend;