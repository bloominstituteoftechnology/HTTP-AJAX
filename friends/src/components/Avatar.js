import React from 'react';

// Dog = <i className="fas fa-dog"/>
// cat = <i className="fas fa-cat"/>
// dove = <i className="fas fa-dove"/>
// dragon = <i className="fas fa-dragon"/>
// frog = <i className="fas fa-frog"/>
// hippo = <i className="fas fa-hippo"/>
// kiwi = <i className="fas fa-kiwi-bird"/>
// otter = <i className="fas fa-otter"/>
// horse = <i className="fas fa-horse"/>


const Avatar = props => {

  if (props.avatar === 'dog'){
  return (
    <i className="fas fa-dog"/>
  )} else if (props.avatar === 'cat'){
    return(
      <i className="fas fa-cat"/>
  )} else if (props.avatar === 'dove'){
    return(
      <i className="fas fa-dove"/>
  )} else if (props.avatar === 'dragon'){
    return (
      <i className="fas fa-dragon"/>
  )} else if (props.avatar === 'frog'){
    return (
      <i className="fas fa-frog"/>
  )} else if (props.avatar === 'hippo'){
    return (
      <i className="fas fa-hippo"/>
  )} else if (props.avatar === 'kiwi'){
    return (
    <i className="fas fa-kiwi-bird"/>
  )} else if (props.avatar === 'otter'){
    return (
      <i className="fas fa-otter"/>
  )} else if (props.avatar === 'horse'){
    return (
      <i className="fas fa-horse"/>
  )} else {
    return (
      <p>No avatar</p>
  )}
}

export default Avatar;
