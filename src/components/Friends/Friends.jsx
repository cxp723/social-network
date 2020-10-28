import React from 'react';
import { connect } from 'react-redux';
import Users from './../Users/Users';
import { follow, unfollow } from './../../redux/users-reducer';

class Friends extends React.Component {
    render () {
        return (
            <Users 
                users = {this.props.friends}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                isFetching = {this.props.isFetching}
                followingUsers= {this.props.followingUsers}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    friends: state.usersPage.friends,
    isFetching: state.usersPage.isFetching,
    followingUsers: state.usersPage.followingUsers
})
const mapDispatchToProps = {follow, unfollow}
export default connect(mapStateToProps, mapDispatchToProps)(Friends)