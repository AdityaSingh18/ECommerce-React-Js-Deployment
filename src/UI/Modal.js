import React from 'react';
import reactDOM from 'react-dom';

import classes from './Modal.module.css';

const Modal = (props) => {
  return <div>{props.children}</div>;
};

export default Modal;
