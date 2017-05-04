import React, { Component } from 'react';

class FormField extends Component {
  render() {
    return (
      <div className="FormField">
        <label>{this.props.label}</label>
      </div>
    );
  }
}