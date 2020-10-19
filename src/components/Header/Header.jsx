import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import Search from './Search';
const Header = (props) => {
    return (
        <header className={classes.header + ' ' + classes.horizontalBar}>
            <div className={classes.logo}></div>
            <Search />
                {props.login
                ? <UserMenu photo ={props.photo} name={props.name} logout={props.logout} login={props.login}/>
                : <NavLink className={classes.login} to="/login">Login</NavLink>}
        </header>
    );
}

export default Header;