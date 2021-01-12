import React from 'react';
import classes from './ProfileDescription.module.css';
import EditProfile from './EditProfile/EditProfile';
import About from './About';
import Friends from './Friends';
import Photos from './Photos';
import Contacts from './Contacts';
import Posts from './Posts/Posts';
import { ContactsType, PostType, ProfileType } from '../../../types/types';

type PropsType = {
    profile: ProfileType,
    isOwner: boolean,
    updatingProfile: boolean,
    updatingProfileInProcess: (isInProcess: boolean) => void,
    updateProfile: (formData: profileFormDataType) => void,
    updateFetching: boolean,
    posts: Array<PostType>,
    addPost: (text: string) => void,
    deletePost: (postId: number) => void,
    reset: (formName: string) => void,
    likePost: (postId: number) => void
}
export type profileFormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
}
const ProfileDescription: React.FC<PropsType> = ({ profile, isOwner, updatingProfile, updatingProfileInProcess, 
    updateProfile, updateFetching, posts, addPost, deletePost, reset, likePost }) => {
    const {photos, userId, ...initialValues} = profile 
    return (
        !updatingProfile ?
            <div className={classes.description}>

                <div>
                    <About profile={profile}/>
                    <Friends />
                </div>
                <Posts isOwner ={isOwner} photo={photos.small} reset = {reset} posts ={posts}
                addPost={addPost} deletePost={deletePost} name={profile.fullName} likePost={likePost}/>
                <div>
                    <Photos userId={userId}/>
                    <Contacts contacts={profile.contacts}/>
                </div>
            </div>
        :
            <EditProfile 
                initialValues={initialValues}
                profile={profile}
                updateFetching={updateFetching}
                updatingProfileInProcess={updatingProfileInProcess}
                isOwner={isOwner}
                onSubmit={(formData: profileFormDataType) => {updateProfile(formData)}}
            />
    )
}

export default ProfileDescription;