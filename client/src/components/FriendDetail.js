import React from 'react';
import FriendsForm from './FriendsForm';
import styled from 'styled-components';

const Card = styled.div`
  margin: 0.8rem 0.5rem;
  width: 30rem;

  perspective: 100rem;
  position: relative;
  height: 25rem;
`;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background-image: linear-gradient(to left bottom, #4dd0e1, #00bcd4);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem;
  backface-visibility: hidden;

  transition: all 0.8s;

  transform: ${props => (props.flipped ? 'rotateY(-180deg)' : 'rotateY(0)')};
`;

const CardBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(to left bottom, #4dd0e1, #00bcd4);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem;
  transform: ${props => (props.flipped ? 'rotateY(0deg)' : 'rotateY(180deg)')};
  backface-visibility: hidden;

  transition: all 0.8s;
`;

const TertiaryHeading = styled.h3`
  font-size: 2.4rem;
  font-weight: 300;
`;

const SmallText = styled.p`
  font-size: 1.4rem;
  color: #212121;
  opacity: 0.7;
  margin-bottom: 2rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  font-family: inherit;
  color: #fff;
  background-color: #424242;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: #757575;
  border: none;
  font-size: 1.8rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;

class FriendDetail extends React.Component {
  state = {
    showForm: false
  };

  toggleForm = () =>
    this.setState(({ showForm }) => ({
      showForm: !showForm
    }));

  render() {
    const { friend, onUpdate, onDelete } = this.props;
    const decoratedOnUpdate = data => {
      onUpdate(data);
      this.setState({
        showForm: false
      });
    };
    return (
      <Card>
        <CardFront flipped={this.state.showForm}>
          <TertiaryHeading>
            {friend.name}, {friend.age}
          </TertiaryHeading>

          <SmallText>{friend.email}</SmallText>
          <div>
            <ActionButton onClick={this.toggleForm}>
              Update Details
            </ActionButton>
            <ActionButton onClick={onDelete}>Delete</ActionButton>
          </div>
        </CardFront>
        <CardBack flipped={this.state.showForm}>
          <CloseButton onClick={this.toggleForm}>&times;</CloseButton>
          <FriendsForm title="Update details" onSubmit={decoratedOnUpdate} />
        </CardBack>
      </Card>
    );
  }
}

export default FriendDetail;
