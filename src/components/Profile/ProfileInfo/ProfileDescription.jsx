import React from 'react';
import ProfileStatus from './ProfileStatus/ProfileStatus-hook';
import classes from './ProfileInfo.module.css';
import edit from '../../../images/edit-icon.png';
import EditProfile from './EditProfile';

const ProfileDescription = ({ profile, status, updateStatus, isOwner, updatingProfile, updatingProfileInProcess, updateProfile, updateFetching }) => {
    
    let contacts = Object.keys(profile.contacts).map(
        (contact) => !!profile.contacts[contact] && <div key={contact}>
            {contact}: <a href={profile.contacts[contact]} target="blank"> {profile.contacts[contact]}</a></div>)
    return (
        !updatingProfile ?
            <div className={classes.description}>
                <h1>{profile.fullName}</h1> {isOwner && <img src={edit} alt="" className={classes.editIcon} onClick={() => { updatingProfileInProcess(true) }} />}
                <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
                {profile.lookingForAJob &&<p><span className={classes.semiBold}>Professional skills: </span>{profile.lookingForAJobDescription}</p>}
                <p><span className={classes.semiBold}>About me:</span> {profile.aboutMe}</p>
                <p><span className={classes.semiBold}>Contacts:</span></p>
                {contacts}
            </div>
        :
            <EditProfile initialValues={profile} profile={profile} updatingProfile={updatingProfile} updateFetching={updateFetching}
            updatingProfileInProcess={updatingProfileInProcess} onSubmit={(formData) => {updateProfile(formData, profile.userId)}}/>
    )
}

export default ProfileDescription;