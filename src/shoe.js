import React from 'react';
const Song = props => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h2> {props.artist} </h2>
      <h2> {props.lenght} </h2>
    </div>
  );
};

export default Song;
