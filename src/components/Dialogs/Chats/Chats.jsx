import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Chats = (props) => {
    let dialogs = props.dialogs.map ( dialog => (<div className={classes.buddy} key={dialog.id}>
        <div className={classes.dialogImage}></div>
        <NavLink to={"/dialogs/" + dialog.id} activeClassName={classes.active}>{dialog.name}</NavLink>
    </div>));
    return (
        <div className={classes.buddies}>
            {dialogs}
        </div>
    )
}

export default Chats;