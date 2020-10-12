import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from '../ProfileInfo.module.css';

const ProfileStatus = (props) => {
    
    let [editMode, setEditMode] = useState (false);
    let [status, setStatus] = useState (props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    const onEditMode = () => {
        setEditMode(true);
    }
    const offEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const changeStatus = (text) => {
        setStatus (text.currentTarget.value);
    }
    return (
        <div className={classes.status}>
            {editMode &&
                <input autoFocus="true" type="text" value={status}
                    onBlur={() => { offEditMode() }} onChange={(e) => { changeStatus(e) }} />}
                {!editMode &&
                    <span onClick={() => {props.isOwner && onEditMode() }}>{props.status || 'No status yet'}</span>}
        </div>
    )
}

export default ProfileStatus;