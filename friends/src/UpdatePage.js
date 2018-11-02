import React from 'react';

class UpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      updateName: '',
      updateAge: 0,
      updateEmail: '',
    }
  }
  render() { 
    return (
      <div className="update-container">
        <form action="">
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
        </form>
      </div>
    );
  }
}

export default UpdatePage
