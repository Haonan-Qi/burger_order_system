import React from 'react';
import PropTypes from 'prop-types'

import burgerLogo from '../../assests/images/burger-logo.png';
import classes from './Logo.module.css'

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

Logo.propTypes = {
    height:PropTypes.string
}

export default Logo;