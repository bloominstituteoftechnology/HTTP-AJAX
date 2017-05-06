import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <div className="modalDialog" id="openModal">
          <div>
            <a href="#close" title="Close" className="close">X</a>
            <h2>{this.props.title}</h2>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;