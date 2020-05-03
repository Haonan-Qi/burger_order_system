import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/burger-Builder">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">orders</NavigationItem>
    </ul>
);

export default navigationItems;