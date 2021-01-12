import React from 'react';
import Profile from './Profile';
import { getProfileWithStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { follow, unfollow } from '../../redux/users-reducer';
import { PostType, ProfileType, UserType } from '../../types/types';
import Preloader from '../common/Preloader/Preloader';
import { AppStateType } from '../../redux/redux-store';
import { profileActions, updateProfile } from './../../redux/profile-reducer';

type ProfileContainerPropsType = {
    uploadingPhoto: boolean
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
class ProfileContainer extends React.Component<RouteComponentProps<{userID?: string}> & ProfileContainerPropsType> {
    
    isOwner = false;
    
    refreshProfile () {
        let userId = Number(this.props.match.params.userID) || this.props.me;
        !userId && this.props.history.push('/login');
        if (userId === this.props.me) {
            this.isOwner = true;
        } else {
            this.isOwner = false;
        }
        this.props.getProfileWithStatus(userId);
        window.scrollTo(0,0);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps: RouteComponentProps<{userID?: string}> & ProfileContainerPropsType) {
        if ((this.props.match.params.userID !== prevProps.match.params.userID) || (this.props.me !== prevProps.me)) {
            this.refreshProfile();
        }
    }
    render() {
        if (this.props.isFetching || !this.props.profile) { return <Preloader /> }
        return <Profile {...this.props} isOwner={this.isOwner}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        me: state.auth.id,
        uploadingPhoto: state.profilePage.uploadingPhoto,
        updatingProfile: state.profilePage.updatingProfile,
        updateFetching: state.profilePage.updateFetching,
        friends: state.usersPage.friends,
        followingUsers: state.usersPage.followingUsers
    }
}
const mapDispatchToProps = { getProfileWithStatus, 
    addPost: profileActions.addPost,
    deletePost: profileActions.deletePost,
    likePost: profileActions.likePost,
    togglePreloader: profileActions.togglePreloader,
    updateStatus,
    savePhoto, 
    updatingProfileInProcess: profileActions.updatingProfileInProcess,
    updateProfile,
    reset,
    follow,
    unfollow}
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileContainer);