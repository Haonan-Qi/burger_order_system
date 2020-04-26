import React,{Fragment} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Burger/Navigation/ToolBar/Toolbar';


const layout = ( props ) => (
    <Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Toolbar />

        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;