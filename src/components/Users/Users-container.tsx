import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import { follow, unfollow, getUsers, onPageChanged } from '../../redux/users-reducer';
import { compose } from 'redux';
import { getUsersTotalCount, getUsersWithPhoto } from '../../redux/users-selectors';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import { usersActions } from './../../redux/users-reducer';
import qs from 'qs'
import { debug } from 'console';

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof mapDispatchToProps
type UsersConnectedPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersConnectedPropsType & RouteComponentProps, {termFromURL: string | null | undefined}> {
    constructor (props: UsersConnectedPropsType & RouteComponentProps) {
        super (props)
        this.state= {termFromURL: null}
    }
    getDataFromURL () {
        this.setState({termFromURL: qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true
        }).term?.toString()})
    }
    componentDidMount() {
        this.getDataFromURL()
        if (!!this.state.termFromURL) {
            this.props.setTerm(this.state.termFromURL)
            this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.term ? this.props.term : undefined)
        }
    }
    componentDidUpdate(prevProps: UsersConnectedPropsType & RouteComponentProps, prevState: {termFromURL: string | null | undefined}) {
        if (prevProps.location.search !== this.props.location.search) {
            this.getDataFromURL()
        }
        if (prevState.termFromURL !== this.state.termFromURL) {
            this.props.setCurrentPage(1);
            this.props.setTerm(this.state.termFromURL ? this.state.termFromURL : null);
            this.props.getUsers(this.props.currentPage, this.props.pageSize, this.state.termFromURL ? this.state.termFromURL : undefined)
        }
    }

    render() {
        return <Users usersTotalCount={this.props.usersTotalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.props.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            followingUsers={this.props.followingUsers}
            paginationButtonsCount={this.props.paginationButtonsCount}
            term={this.props.term} />
    }
}
const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersWithPhoto(state),
        usersTotalCount: getUsersTotalCount(state),
        paginationButtonsCount: state.usersPage.paginationButtonsCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        term: state.usersPage.term,
        isFetching: state.usersPage.isFetching,
        followingUsers: state.usersPage.followingUsers
    }
}

const mapDispatchToProps = { follow, unfollow, getUsers, onPageChanged, setTerm: usersActions.setTerm, setCurrentPage: usersActions.setCurrentPage }

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withRouter)(UsersContainer);
