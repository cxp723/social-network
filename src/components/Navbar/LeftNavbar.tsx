import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const LeftNavbar: React.FC = () => {
    return (
        <nav className={classes.left + ' ' + classes.navbar}>
            <div className={`${classes.item}`}>
                <NavLink to="/profile" activeClassName={classes.active}><Icon className={classes.icon} name="user outline"/></NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/friends" activeClassName={classes.active}><Icon className={classes.icon} name="handshake outline"/></NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}><Icon className={classes.icon} name="wechat"/></NavLink>
            </div>
            {/* 
            News page is in development
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}><Icon className={classes.icon} name="newspaper outline"/></NavLink>
            </div> */}
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}><Icon className={classes.icon} name="users"/></NavLink>
            </div>
        </nav>
    );
}

export default LeftNavbar;