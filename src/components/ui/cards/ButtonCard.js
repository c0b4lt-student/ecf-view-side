import React from 'react';

function ButtonCard(props) {
  return (
    <article className="d-flex align-self-center w-75 p-2 m-auto mt-3 bg-secondary rounded">
      <button type="button" className="w-75 m-auto p-1 rounded bg-succes" onClick={props.handleClick}>{props.children}</button>
    </article>
  );
}

export default ButtonCard;
