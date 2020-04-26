import React,{Fragment} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Burger/Navigation/ToolBar/Toolbar';
import SideDrawer from '../Burger/Navigation/SideDrawer/SideDrawer';


const layout = ( props ) => (
    <Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;