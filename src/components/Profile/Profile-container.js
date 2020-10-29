import React from 'react';
import Profile from './Profile';
import { getProfileWithStatus, addPost, togglePreloader, updateStatus, savePhoto, updatingProfileInProcess, updateProfile, deletePost, likePost } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { follow, unfollow } from './../../redux/users-reducer';


class ProfileContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOwner : false,
        }
    }
    
    refreshProfile () {
        let userId = this.props.match.params.userID || this.props.me;
        !userId && this.props.history.push('/login');
        if (userId === this.props.me) {
            this.setState({isOwner : true});
        } else {
            this.setState({isOwner : false});
        }
        this.props.getProfileWithStatus(userId);
        window.scrollTo(0,0);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if ((this.props.match.params.userID !== prevProps.match.params.userID) || (this.props.me !== prevProps.me)) {
            this.refreshProfile();
        }
    }
    render() {
        if (this.props.fetching || !this.props.profile) { return <Preloader /> }
        return <Profile {...this.props} userId={this.props.match.params.userID || this.props.me} isOwner={this.state.isOwner}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        fetching: state.profilePage.fetching,
        status: state.profilePage.status,
        me: state.auth.id,
        uploadingPhoto: state.profilePage.uploadingPhoto,
        updatingProfile: state.profilePage.updatingProfile,
        updateFetching: state.profilePage.updateFetching,
        friends: state.usersPage.friends,
        followingUsers: state.usersPage.followingUsers
    }
}

export default compose(
    connect(mapStateToProps, { getProfileWithStatus, addPost, deletePost, likePost, togglePreloader, updateStatus,
        savePhoto, updatingProfileInProcess, updateProfile, reset, follow, unfollow}),
    withRouter, withAuthRedirect)(ProfileContainer);