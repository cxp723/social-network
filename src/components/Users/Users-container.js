import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import { follow, unfollow, getUsers, showMoreUsers, onPageChanged } from './../../redux/users-reducer';
import { compose } from 'redux';
import { getUsersTotalCount, getUsersSelectorReselect } from './../../redux/users-selectors';

class UsersAPIContainer extends React.Component {    
    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render () {
        return <Users usersTotalCount={this.props.usersTotalCount}
                        pageSize = {this.props.pageSize} 
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.props.onPageChanged}
                        users = {this.props.users}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                        isFetching = {this.props.isFetching}
                        showMoreUsers = {this.props.showMoreUsers}
                        followingUsers= {this.props.followingUsers}
                        paginationButtonsCount = {this.props.paginationButtonsCount}/>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsersSelectorReselect(state),
        usersTotalCount : getUsersTotalCount(state),
        paginationButtonsCount: state.usersPage.paginationButtonsCount,
        currentPage : state.usersPage.currentPage,
        pageSize : state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingUsers: state.usersPage.followingUsers
    }
}

let mapDispatchToProps = {follow, unfollow, showMoreUsers, getUsers, onPageChanged}

export default compose(connect (mapStateToProps, mapDispatchToProps))(UsersAPIContainer);
