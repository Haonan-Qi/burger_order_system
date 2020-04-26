import React from "react";
import Classess from "./Modal.module.css";

const modal = (props) => {
  return <div className={Classess.Modal}>{props.children}</div>;
};

export default modal;


