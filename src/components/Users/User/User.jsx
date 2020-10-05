import React from 'react';
import classes from './../Users.module.css';
import user from '../../../images/user-logo.png';
import { NavLink } from 'react-router-dom';


const User = (props) => {
    let fetching = (user) => {
        return props.followingUsers.some((userId) => userId === user) ? true : false;
    }
    return (
        
        <div className={classes.user}>
            <div className={classes.preview}>
                <NavLink to={"/profile/" + props.userId}><img src={props.photo ? props.photo : user} className={classes.photo} alt="user"/></NavLink>
                {props.followed ?

                <button disabled={fetching(props.userId)}
                onClick={() => {props.unfollow(props.userId);}}
                className={classes.followButton}>Unfollow</button>

                : <button disabled={fetching(props.userId)} 
                onClick={() => {props.follow(props.userId);}}
                className={classes.followButton}>Follow</button>}

            </div>
            <div className={classes.info}>
                <div className={classes.description}>
                    <p className={classes.name}>{props.name}</p>
                    <p className={classes.status}>{props.status}</p>
                </div>
                <div className={classes.location}>
                    <p className={classes.country}>{props.location.country ? props.location.country : 'Unknown country'}</p>
                    <p className={classes.city}>{props.location.city ? props.location.city : 'Unknown city'}</p>
                </div>
            </div>
        </div>
    )
}

export default User;