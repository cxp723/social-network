import React from 'react';
import Profile from './Profile';
import { getProfileWithStatus, addPost, togglePreloader, updateStatus } from './../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';


class ProfileAPIContainer extends React.Component {
    userId = this.props.match.params.userID ? this.props.match.params.userID : this.props.me
    componentDidMount() {
        
            this.props.getProfileWithStatus(this.userId);
        
    }
    render() {
        
        if (this.props.fetching || !this.props.profile) { return <Preloader /> }
        return this.userId ? <Profile {...this.props} userId={this.userId}/> : <Redirect to="/login"/>;
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        fetching: state.profilePage.fetching,
        status: state.profilePage.status,
        me: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, { getProfileWithStatus, addPost, togglePreloader, updateStatus }),
    withRouter)(ProfileAPIContainer);