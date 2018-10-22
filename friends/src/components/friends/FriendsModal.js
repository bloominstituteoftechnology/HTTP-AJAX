import React, { Component, Fragment } from 'react';
import { PortalGun } from '../../portalGun';

import FriendsForm from './FriendsForm';
import FriendsEditForm from './FriendsEditForm';
import { ReactComponent as Close } from '../../assets/svgs/x.svg';
import add from '../../assets/images/add.png';
import styles from './FriendsModal.module.css';

class FriendsModal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, edit: false };
    PortalGun.subscribe('edit', () => this.showEdit());
  }

  showEdit = () => this.setState({ visible: true, edit: true });

  handleOpen = () => {
    return this.state.visible ? null : this.setState({ visible: true });
  };

  handleClose = () => this.setState({ visible: false, edit: false });

  renderForm = () => {
    return this.state.visible ? (
      <Fragment>
        <div className={styles.close} onClick={this.handleClose}>
          <Close />
        </div>
        {this.state.edit ? (
          <FriendsEditForm updateFriends={this.props.updateFriends} />
        ) : (
          <FriendsForm updateFriends={this.props.updateFriends} />
        )}
      </Fragment>
    ) : (
      <Fragment>
        <img src={add} alt="add icon" />
        <div className={styles.post}>Post</div>
      </Fragment>
    );
  };

  render() {
    return (
      <div
        className={this.state.visible ? styles.container2 : styles.container1}
        onClick={this.handleOpen}
      >
        {this.renderForm()}
      </div>
    );
  }
}

export default FriendsModal;
