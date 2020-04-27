import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types'
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../../UI/BackDrop/BackDrop";

const SideDrawer = (props) => {
  let attachedClasses = props.open?[classes.SideDrawer, classes.Open]:[classes.SideDrawer, classes.Close];
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

SideDrawer.propTypes = {
  open:PropTypes.bool,
  closed:PropTypes.func
}
export default SideDrawer;
