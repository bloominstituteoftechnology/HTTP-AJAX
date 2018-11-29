import React from 'react';

class UpdateForm extends React.Component {
  state = {  }
  render() {
    return (
      <div class="ui modal">
        <i class="close icon"></i>
        <div class="header">
          Profile Picture
        </div>

        <div class="actions">
          <div class="ui black deny button">
            Nope
          </div>
          <div class="ui positive right labeled icon button">
            Yep, that's me
            <i class="checkmark icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateForm;