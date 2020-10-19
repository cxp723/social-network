import React from 'react';
import classes from './Navbar.module.css';
import FriendsListContainer from './FriendsList/FriendsList-container';

const RightNavbar = (props) => {
    return (
        <nav className={classes.right + ' ' + classes.navbar}>
            <FriendsListContainer/>
        </nav>
    );
}


export default RightNavbar;