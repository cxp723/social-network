import React from 'react';
import classes from '../Header/Header.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer + ' ' + classes.horizontalBar}>
            <div className={classes.logo}></div>
        </footer>
    )
}
export default Footer;
