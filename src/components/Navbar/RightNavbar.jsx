import React from 'react';
import classes from './Navbar.module.css';
import FriendsListContainer from './FriendsList/FriendsList-container';

const RightNavbar = () => {
    return (
        <nav className={classes.right + ' ' + classes.navbar}>
            <FriendsListContainer/>
        </nav>
    );
}


export default RightNavbar;