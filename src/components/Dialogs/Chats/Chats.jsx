import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames'

const Chats = (props) => {
    let dialogs = props.dialogs.map ( dialog => {
        let name = '';
        let photo = '';
        props.friends.forEach((friend) => {
            if (friend.id == dialog) {
                name = friend.name;
                photo = friend.photos.small;
            }
        })
        return (<div className={cn (classes.buddy, props.userId === dialog && classes.selectedUser)} key={dialog}>
        <img className={classes.dialogImage} src={photo} alt=''/>
        <NavLink to={"/dialogs/" + dialog} activeClassName={classes.active}>{name}</NavLink>
    </div>)}
    );
    return (
        <div className={classes.buddies}>
            {dialogs}
        </div>
    )
}

export default Chats;