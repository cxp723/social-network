import React from 'react';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import classes from '../Profile.module.css';
import { NavLink } from 'react-router-dom';
import { Link} from "react-scroll";

const ProfileMenuBar = ({isOwner, updatingProfileInProcess, friends, follow, unfollow, followingUsers, userId}) => {
    let followed = friends.some(friend => friend.id == userId);
    let [pushed, setPushed] = useState(false)
    let followingInProgress = false;
    followingInProgress = followingUsers.some(user => user === userId) ? true : false;
    return (
        <div className={classes.profileMenuBar}>
            <Link to="about" smooth={true} offset={100} duration={500}>
                <div className={classes.profileMenuOption}>About</div>
            </Link>

            <Link to="posts" smooth={true} offset={100} duration={500}>
                <div className={classes.profileMenuOption}>Posts</div>
            </Link>

            <div className={classes.divider}></div>

            <Link to="friends" smooth={true} offset={-30} duration= {500}>
                <div className={classes.profileMenuOption}>Friends</div>
            </Link>

            <Link to="contacts" smooth={true} offset={-30} duration= {500}>
                <div className={classes.profileMenuOption}>Contacts</div>
            </Link>

            <div className={classes.actionButtons}>
                {isOwner 
                ? <Button size='huge' circular icon='pencil alternate'
                onClick={() => { updatingProfileInProcess(true) }} color='orange'/>
                : <>
                    <NavLink to={'/dialogs/' + userId}>
                        <Button disabled={!followed} size='huge' circular icon='paper plane outline' color='purple'/>
                    </NavLink>
                {followed ?
                    <Button size='huge' loading={followingInProgress} disabled={pushed} onClick={()=>{unfollow(userId); setPushed(true);}} circular icon={pushed ? 'check': 'remove user'} color='pink'/>
                    :
                    <Button size='huge' loading={followingInProgress} disabled={pushed} onClick={()=>{follow(userId); setPushed(true);}} circular icon={pushed ? 'check': 'add user'} color='green'/>}
                </>
                }
            </div>
        </div>
    )
}

export default ProfileMenuBar