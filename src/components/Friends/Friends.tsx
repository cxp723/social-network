import React from 'react';
import { connect } from 'react-redux';
import Users from '../Users/Users';
import { follow, unfollow, onPageChanged } from '../../redux/users-reducer';
import { AppStateType } from '../../redux/redux-store';
import { getUsersTotalCount } from './../../redux/users-selectors';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number, pageSize: number, term?: string) => void
}
export type UsersConnectedPropsType = MapStateToPropsType & MapDispatchToPropsType

const Friends: React.FC<UsersConnectedPropsType> = (props) => (
    <Users
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
        isFetching={props.isFetching}
        followingUsers={props.followingUsers}
        usersTotalCount={props.usersTotalCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        term={props.term}
        paginationButtonsCount={props.paginationButtonsCount}
    />
)

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.friends,
    isFetching: state.usersPage.isFetching,
    followingUsers: state.usersPage.followingUsers,
    usersTotalCount: getUsersTotalCount(state),
    paginationButtonsCount: state.usersPage.paginationButtonsCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    term: state.usersPage.term,
})
const mapDispatchToProps = { follow, unfollow, onPageChanged }
export default connect(mapStateToProps, mapDispatchToProps)(Friends)