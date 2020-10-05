import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}></div>
                {props.login
                ? <div className={classes.userInfo}><p className={classes.user}>Welcome, {props.login}</p><button onClick={props.logout} className={classes.logOut}>LogOut</button></div>
                : <NavLink className={classes.login} to="/login">Login</NavLink>}
        </header>
    );
}

export default Header;