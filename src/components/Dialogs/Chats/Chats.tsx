import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames'
import { DialogType, UserType } from '../../../types/types';

type PropsType = {
    friends: Array<UserType>,
    dialogs: Array<DialogType>,
    userId: number
}

const Chats: React.FC<PropsType> = (props) => {
    
    let dialogs = props.friends.length > 0 && props.dialogs.map(dialog => {
        let friend = props.friends.find(friend => friend.id === dialog.userId);
        let name, photo;
        if (!!friend) {
        name = friend.name;
        photo = friend.photos.small
        }
        return (<div className={cn(classes.buddy, props.userId === dialog.userId && classes.selectedUser)} key={dialog.userId}>
            <img className={classes.dialogImage} src={photo !== null ? photo: undefined} alt='' />
            <NavLink to={"/dialogs/" + dialog.userId} activeClassName={classes.active}>{name}</NavLink>
        </div>)
    }
    );
    return (
        <div className={classes.buddies}>
            {dialogs}
        </div>
    )
}

export default Chats;