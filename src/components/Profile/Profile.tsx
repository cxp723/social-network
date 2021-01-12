import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import { PostType, ProfileType, UserType } from '../../types/types';

type PropsType = {
    uploadingPhoto: boolean
    isOwner: boolean
    savePhoto: (photo: File) => void
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    updatingProfileInProcess: (isInProcess: boolean) => void
    follow: (userId: number) => void 
    unfollow: (userId: number) => void 
    followingUsers: Array<number>
    friends: Array<UserType>
    getProfileWithStatus: (userId: number) => void,
    me: number,
    isFetching: boolean,
    updatingProfile: boolean,
    updateProfile: (formData: object) => void,
    updateFetching: boolean,
    posts: Array<PostType>,
    addPost: (text: string) => void,
    deletePost: (postId: number) => void,
    reset: (formName: string) => void,
    likePost: (postId: number) => void
}

const Profile: React.FC<PropsType> = ({ profile, uploadingPhoto, savePhoto, status, updateStatus, follow, unfollow, friends, followingUsers, ...props }) => {
    return (
        <div className={classes.info}>
            <ProfileHeader uploadingPhoto={uploadingPhoto}
            isOwner={props.isOwner}
            savePhoto={savePhoto}
            profile={profile}
            status={status}
            updateStatus={updateStatus} 
            updatingProfileInProcess = {props.updatingProfileInProcess}
            follow={follow}
            unfollow={unfollow}
            followingUsers={followingUsers}
            friends={friends}/>

            <ProfileDescription profile={profile} {...props}/>
        </div>

    )
}


export default Profile;