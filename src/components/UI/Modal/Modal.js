import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";
import PropTypes from 'prop-types'

const Modal = (props) => {
  return (
    <Fragment>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

Modal.propTypes = {
  show:PropTypes.bool,
  modalClosed:PropTypes.func
}

export default Modal;
