import React, { Fragment, useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Burger/Navigation/ToolBar/Toolbar";
import SideDrawer from "../Burger/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [drawerState, setDrawerState] = useState({ showSideDrawer: false });

  const sideDrawerClosedHandler = () => {
    setDrawerState({ showSideDrawer: false });
  };

  const sideDrawerToggleHandler = () => {
    setDrawerState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  return (
    <Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        open={drawerState.showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
