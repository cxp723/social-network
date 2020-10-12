import React from 'react';
import Profile from './Profile';
import { getProfileWithStatus, addPost, togglePreloader, updateStatus, savePhoto, updatingProfileInProcess, updateProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';


class ProfileAPIContainer extends React.Component {
    isOwner = false
    refreshProfile () {
        let userId = this.props.match.params.userID || this.props.me;
        !userId && this.props.history.push('/login');
        if (userId === this.props.me) this.isOwner = true;
        this.props.getProfileWithStatus(userId);
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
        return <Profile {...this.props} isOwner={this.isOwner}/>
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
        updateFetching: state.profilePage.updateFetching
    }
}

export default compose(
    connect(mapStateToProps, { getProfileWithStatus, addPost, togglePreloader, updateStatus, savePhoto, updatingProfileInProcess, updateProfile }),
    withRouter)(ProfileAPIContainer);