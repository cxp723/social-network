import React from 'react';
import user_logo from '../../../images/person-male.png';
import photoIcon from '../../../images/photo-icon.png';
import cn from 'classnames';
import classes from './ProfileInfo.module.css';

const ProfilePhoto = ({ uploadingPhoto, isOwner, savePhoto, profile }) => {
    return (
        <div className={cn(classes.userPhoto, uploadingPhoto && classes.bluredPhoto)} >
            <img className={classes.ava} src={profile.photos.large || user_logo} alt="user avatar" />
            {isOwner &&
                <label>
                    <img src={photoIcon} alt="" className={classes.photoIcon} />
                    <input type="file" onChange={(e) => { savePhoto(e.target.files[0]) }} className={classes.invisibleInput} />
                </label>}
        </div>
    )
}
export default ProfilePhoto;