import React from 'react';
import classes from './../Users.module.css';
import user from '../../../images/user-logo.png';
import { NavLink } from 'react-router-dom';
import { wallpapers } from '../../Profile/wallpapers';
import { Button } from 'semantic-ui-react';

type PropsType = {
    userId: number,
    followingUsers: Array<number>,
    photo: string | null,
    name: string,
    followed: boolean,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}
const User: React.FC<PropsType> = (props) => {
    const countries = require('../../../Utils/countries.json');
    const randomCountry = Object.keys(countries)[props.userId % 100];
    let randomCity = countries[randomCountry][props.userId % 10];
    if (!randomCity) randomCity = countries[randomCountry][0];
    let fetching = (user: number) => {
        return props.followingUsers.some((userId) => userId === user) ? true : false;
    }
    return (
        
        <div className={classes.user}>
            
                <img src={wallpapers[props.userId % 10]} className={classes.wallpaper} alt=''/>
                <NavLink to={"/profile/" + props.userId}><div className={classes.photoContainer}><img src={props.photo ? props.photo : user} className={classes.photo} alt="user"/></div></NavLink>
                <div className={classes.description}>
                    <NavLink to={"/profile/" + props.userId}><p className={classes.name}>{props.name}</p></NavLink>
                    <div className={classes.location}>
                    <p className={classes.city}>{randomCity + ','}</p>
                    <p className={classes.country}>{randomCountry}</p>
                    
                    </div>
                </div>

                <div className={classes.buttons}>
                    {props.followed ?
    
                    <>
                        <Button circular icon="remove user" color="pink" loading={fetching(props.userId)}
                        onClick={() => {props.unfollow(props.userId);}}
                        className={classes.followButton}/>
    
                        <NavLink to={'/dialogs/' + props.userId}>
                            <Button circular icon="paper plane outline" color="purple" className={classes.followButton}/>
                        </NavLink>
                    </>
    
                    : <>
                        <Button circular icon="add user"  color="green" loading={fetching(props.userId)} 
                        onClick={() => {props.follow(props.userId);}}
                        className={classes.followButton}/>
    
                        <Button disabled circular icon="paper plane outline" color="purple" className={classes.followButton}/>
                    </>}
                </div>
                
        </div>
    )
}

export default User;